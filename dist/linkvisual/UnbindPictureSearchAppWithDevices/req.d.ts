export interface UnbindPictureSearchAppWithDevicesRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `5a502d3fbab8410e8fd4be9037c7****`
     */
    "AppInstanceId": string;
    /**
     * 实例ID。
     * - 企业版实例：必须传入此参数。您可在物联网平台控制台的**实例概览**页面，查看您的企业版实例ID。
     * - 公共实例：无需传入此参数。
     * @example `iot-060a****`
     */
    "IotInstanceId"?: string;
    /**
     * 设备IotId列表。支持传入V系列边缘一体机或摄像头的IotId。
     * IotId是物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * 单次最多可填写20个设备IotId。
     * @example `VrJwPGjC1sJlqPjZA3cxg4****`
     */
    "DeviceIotIds": string[];
}
