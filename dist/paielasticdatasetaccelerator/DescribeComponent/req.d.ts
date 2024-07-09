export interface DescribeComponentRequest {
    /**
     * 数据集加速组件ID。如何获取组件ID，请参见[ListComponents](~~467918~~)。
     * @example `cmpt-my1tk3jggooi5uwks5`
     */
    "ComponentId": string;
    /**
     * 是否对组件模板进行渲染并展示。
     * 如果值为true，则返回中包含模板渲染后的内容。
     * > 只支持指定组件列表：
     *   dataset-accelerator
     * 返回的组件模板内容最大长度为4096 Byte，超过最大长度会对模板进行截断。
     * >
     * @example `true`
     */
    "RenderTemplate"?: boolean;
    /**
     * 组件模板渲染时使用的参数。
     */
    "Values"?: any;
}
