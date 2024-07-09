export interface AuthorizeDeviceRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 设备标识。
     * @example `654887879557****`
     */
    "DeviceId": string;
    /**
     * IoT数据源组标识。
     * @example `475020454741****`
     */
    "DeviceGroupId": string;
}
