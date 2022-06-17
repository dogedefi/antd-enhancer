import { useCallback, useLayoutEffect, useRef } from "react";

export const findAntdModalRootNode = (dom: HTMLElement): HTMLElement | null => {
  try {
    if (
      !dom.classList.length &&
      dom.children[0].classList[0] === "ant-modal-root"
    ) {
      return dom;
    }
  } catch (error) {
    return findAntdModalRootNode(dom.parentNode as HTMLElement);
  }

  return findAntdModalRootNode(dom.parentNode as HTMLElement);
};

export const useAntdModalIndex = (
  defaultZIndex: number | string = 50,
  shouldUpdate: boolean = false
) => {
  const divRef = useRef<HTMLDivElement>();

  const setZIndex = useCallback((zIndex: number | string) => {
    if (divRef.current) {
      const dom = findAntdModalRootNode(divRef.current);
      if (dom) {
        dom.style.zIndex = String(zIndex);
        dom.style.position = "relative";
      }
    }
  }, []);

  useLayoutEffect(() => {
    if (shouldUpdate) {
      setZIndex(defaultZIndex);
    }
  }, [shouldUpdate]);

  return { setZIndex, marker: divRef };
};
