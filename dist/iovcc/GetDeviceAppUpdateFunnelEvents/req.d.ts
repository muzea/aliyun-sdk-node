export interface GetDeviceAppUpdateFunnelEventsRequest {
    /**
     * 应用包名
     * @example `com.aliyun.package1`
     */
    "PackageName"?: string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 目标版本versioncode
     * @example `100`
     */
    "TargetVersionCode"?: string;
    /**
     * 设备ID类型，支持：
     * - **device_id**：硬件ID
     * - **sn**：序列号
     * - **vin**：车架号
     * - **hardware_id**：硬件ID
     * @example `hardware_id`
     */
    "IdType"?: string;
    /**
     * 源设备ID
     * @example `23452345234523452`
     */
    "OriginalId"?: string;
}
