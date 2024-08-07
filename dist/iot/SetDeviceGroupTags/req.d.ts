export interface SetDeviceGroupTagsRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 分组ID，分组的全局唯一标识符。
     * @example `W16X8Tvdosec****`
     */
    "GroupId": string;
    /**
     * JSON格式的标签数据。TagString由标签的**tagKey**和**tagValue**组成，**tagKey**和**tagValue**均不能为空。
     * - **tagKey**：标签键。可包含英文大小写字母，数字和英文句号（.），长度在2~30字符之间。
     * - **tagValue**：标签值。可包含中文、英文字母、数字、下划线（_）和短划线（-）。长度不可超过128个字符。一个中文汉字算2个字符。
     * 多个标签以英文逗号间隔。例如`[{"tagKey":"h1","tagValue":"rr"},{"tagKey":"7h","tagValue":"rr"}]`。
     * 若更新已有标签，新的标签Value值将覆盖原来的值。
     * 若要删除某个标签，则不传入该标签的Key和Value即可。
     * ><notice>`abc`为物联网平台系统保留的标签Key，即**tagKey**不能设置为abc。若设置`tagKey=abc`，使用标签检索时会直接被过滤。
     * ></notice>
     * @example `[{"tagKey":"h1","tagValue":"rr"},{"tagKey":"7h","tagValue":"rr"}]`
     */
    "TagString"?: string;
    /**
     * 分组类型。
     * <props="china">传入**LINK_PLATFORM_DYNAMIC**时，表示动态分组。不传入时，默认为静态分组。</props>
     * <props="intl">无需传入。</props>
     * @example `LINK_PLATFORM_DYNAMIC`
     */
    "GroupType"?: string;
}
