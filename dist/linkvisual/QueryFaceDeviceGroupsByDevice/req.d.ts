export interface QueryFaceDeviceGroupsByDeviceRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 实例Id
     * @example `TestIotInstanceId`
     */
    "IotInstanceId": string;
    /**
     * 产品Key
     * @example `TestProductKey`
     */
    "ProductKey": string;
    /**
     * 设备名
     * @example `TestDeviceName`
     */
    "DeviceName": string;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
    /**
     * 分页号
     * @example `1`
     */
    "PageNo": number;
}
