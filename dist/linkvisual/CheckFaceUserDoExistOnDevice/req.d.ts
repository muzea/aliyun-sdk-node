export interface CheckFaceUserDoExistOnDeviceRequest {
    /**
     * 隔离Id
     * @example `a103lZ86ovStDMnU`
     */
    "IsolationId": string;
    /**
     * 隔离Id
     * @example `TestIotInstanceId`
     */
    "IotInstanceId"?: string;
    /**
     * 用户Id
     * @example `tibce3fsgqelezk8`
     */
    "UserId": string;
    /**
     * 物联网平台产品Key
     * @example `a1654Sr4Y3f`
     */
    "ProductKey": string;
    /**
     * 设备名称
     * @example `TestDeviceName`
     */
    "DeviceName": string;
}
