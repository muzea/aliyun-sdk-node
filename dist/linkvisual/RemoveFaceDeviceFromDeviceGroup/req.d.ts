export interface RemoveFaceDeviceFromDeviceGroupRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 实例Id
     * @example `TestIotInstanceId`
     */
    "IotInstanceId"?: string;
    /**
     * 物联网平台产品Key
     * @example `TestProductKey`
     */
    "ProductKey": string;
    /**
     * 设备名称
     * @example `TestDeviceName`
     */
    "DeviceName": string;
    /**
     * 设备组Id
     * @example `TestDeviceGroupId`
     */
    "DeviceGroupId": string;
}
