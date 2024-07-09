export interface UpdateSmartAccessGatewayVersionRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-0ovhf732a9j*******`
     */
    "SmartAGId": string;
    /**
     * 要升级的智能接入网关的版本。
     * @example `1.0.1`
     */
    "VersionCode": string;
    /**
     * 智能接入网关实例所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag233****`
     */
    "SerialNumber"?: string;
    /**
     * 指定要升级的软件版本类型。取值：
     * - **Device**：表示智能接入网关设备运行的操作系统软件。
     * - **Dpi**：表示智能接入网关设备运行的应用特征库软件。
     * @example `Device`
     */
    "VersionType"?: string;
}
