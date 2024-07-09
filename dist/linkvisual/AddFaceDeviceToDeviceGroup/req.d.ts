export interface AddFaceDeviceToDeviceGroupRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 实例化Id
     * @example `TestInstanceId`
     */
    "IotInstanceId"?: string;
    /**
     * 产品Key
     * @example `a1Tp7KYZHHK`
     */
    "ProductKey": string;
    /**
     * 设备名称
     * @example `TestDevice`
     */
    "DeviceName": string;
    /**
     * 设备组Id(调用AddFaceDeviceGroup接口时获得)
     * @example `kvjyhurc`
     */
    "DeviceGroupId": string;
}
