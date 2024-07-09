export interface DescribeSmartAccessGatewayVersionsRequest {
    /**
     *  智能接入网关实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-d3m51apgw4po5*****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage62x022502****`
     */
    "SmartAGSn"?: string;
    /**
     * 智能接入网关设备软件类型。取值：
     * - **Device**：（默认值）表示智能接入网关设备运行的操作系统软件。
     * - **Dpi**：表示智能接入网关设备运行的应用特征库软件。
     * @example `Device`
     */
    "VersionType"?: string;
}
