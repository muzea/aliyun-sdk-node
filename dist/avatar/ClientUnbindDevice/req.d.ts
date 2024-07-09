export interface ClientUnbindDeviceRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId。
     * @example `9185`
     */
    "TenantId"?: number;
    /**
     * 设备Id
     * @example `dsdsf1`
     */
    "DeviceId"?: string;
}
