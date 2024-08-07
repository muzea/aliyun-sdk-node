export interface QueryDeviceGroupInfoRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 分组ID，分组的全局唯一标识符。
     * 您可调用[QueryDeviceGroupList](~~93356~~)接口查询分组ID（**GroupId**）。
     * @example `tDQvBJqbUyHs****`
     */
    "GroupId": string;
    /**
     * 分组类型。
     * 目前仅支持传入**LINK_PLATFORM_DYNAMIC**，表示动态分组。不传入时，默认为静态分组。
     * @example `LINK_PLATFORM_DYNAMIC`
     */
    "GroupType"?: string;
}
