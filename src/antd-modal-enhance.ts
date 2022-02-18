import { useCallback, useLayoutEffect, useRef } from "react";

export const findAntdModalRootNode = (dom: HTMLElement): HTMLElement => {
  if (
    !dom.classList.length &&
    dom.children[0].classList[0] === "ant-modal-root"
  ) {
    return dom;
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
      dom.style.zIndex = String(zIndex);
    }
  }, []);

  useLayoutEffect(() => {
    if (shouldUpdate) {
      setZIndex(defaultZIndex);
    }
  }, [shouldUpdate]);

  return { setZIndex, marker: divRef };
};
