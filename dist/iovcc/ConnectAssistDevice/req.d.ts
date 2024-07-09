export interface ConnectAssistDeviceRequest {
    /**
     * 硬件ID
     * @example `BALFL8429HI`
     */
    "HardwareId"?: string;
    /**
     * 允许执行扩展命令
     * @example `true`
     */
    "AllowCommandExtension"?: boolean;
    /**
     * 设备ID
     * @example `6fde56979c484b93b99fba257e3cbe83`
     */
    "DeviceId"?: string;
    /**
     * 序列号
     * @example `BALFL8429SN`
     */
    "SerialNumber"?: string;
    /**
     * 车架号
     * @example `LHK000026VFAG7A31`
     */
    "VIN"?: string;
    /**
     * AliOS设备UUID
     * @example `842972B2C0F4C9F030E60769CA65806A`
     */
    "UUID"?: string;
    /**
     * 项目ID
     * @example `PZ1HK7JZ`
     */
    "ProjectId"?: string;
}
