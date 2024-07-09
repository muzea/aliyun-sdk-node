export interface QueryDeviceByStatusRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属的产品**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备状态。 可选值：
     * - **0**：未激活。
     * - **1**：在线。
     * - **3**：离线。
     * - **8**：已禁用。
     * @example `1`
     */
    "Status": number;
    /**
     * 指定从返回结果中的第几页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定返回结果中每页显示的记录数量，最大值是50。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * ><notice>目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * ></notice>
     * @example `rg-acfm4l5tcwd***`
     */
    "ResourceGroupId"?: string;
}
