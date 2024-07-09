export interface GetDeviceSystemUpdateFunnelEventsRequest {
    /**
     * 源设备ID
     * @example `23452345234523452`
     */
    "OriginalId"?: string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 目标系统版本号
     * @example `2.0.1-R-20180412.0824`
     */
    "TargetVersion"?: string;
    /**
     * 设备ID类型，支持：
     * - **device_id**：硬件ID
     * - **sn**：序列号
     * - **vin**：车架号
     * - **hardware_id**：硬件ID
     * @example `hardware_id`
     */
    "IdType"?: string;
}
