export interface DeleteDeviceDynamicGroupRequest {
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
}
