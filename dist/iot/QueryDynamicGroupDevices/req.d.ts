export interface QueryDynamicGroupDevicesRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-***-v6***`
     */
    "IotInstanceId": string;
    /**
     * 分组ID，分组的全局唯一标识符。
     * 您可调用[QueryDeviceGroupList](~~93356~~)接口查询分组ID（**GroupId**）。
     * @example `tDQvBJqbUyHs***`
     */
    "GroupId": string;
    /**
     * 每页记录数，最大值是200，默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1BwAGV***`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * 传入此参数时，若**FuzzyName**同时传入**true**，会模糊搜索设备，**DeviceName**值为设备名称的前缀字符串，长度必须大于4个字符。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 下一页标识，首次查询无需传入。
     * @example `TGlzdFJlc291***`
     */
    "NextToken"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。默认值是1。
     * @example `2`
     */
    "CurrentPage"?: number;
    /**
     * 设备状态。取值：
     * - **ONLINE**：设备在线。
     * - **OFFLINE**：设备离线。
     * - **UNACTIVE**：设备未激活。
     * - **DISABLE**：设备已禁用。
     * @example `OFFLINE`
     */
    "Status"?: string;
    /**
     * 是否根据**DeviceName**值，模糊搜索设备。
     * - **true**：模糊搜索。
     * - **false**（默认）：不模糊搜索。
     * @example `true`
     */
    "FuzzyName"?: boolean;
}
