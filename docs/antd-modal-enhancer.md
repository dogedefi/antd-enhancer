# antd-modal-enhancer

### Set ZIndex on Root Node

```typescript
import { AntdModalEnhancer } from "antd-enhancer";

const { useAntdModalIndex } = AntdModalEnhancer;

const Demo = ({ visible }: IPersonModalProps) => {
  const { marker } = useAntdModalIndex(50, visible);

  return (
    <Modal visible={visible} className="demo">
      <div className="content-box" ref={marker}>
        ...Something
      </div>
    </Modal>
  );
};

export default Demo;
```
