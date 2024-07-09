export interface DescribeDeviceAutoUpgradePolicyRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-kxe2cv7hot7qrv****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage62x022502****`
     */
    "SerialNumber": string;
    /**
     * 要查看的软件类型：
     * - **Device**：表示智能接入网关设备运行的操作系统软件。
     * - **Dpi**：表示智能接入网关设备运行的应用特征库软件。
     * @example `Device`
     */
    "VersionType"?: string;
}
