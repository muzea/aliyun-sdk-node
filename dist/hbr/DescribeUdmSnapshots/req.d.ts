export interface DescribeUdmSnapshotsRequest {
    /**
     * 数据源类型，取值范围：
     * - **UDM_ECS**：整机备份
     * - **UDM\_ECS_DISK**：整机备份云盘子任务
     * - **UDM_DISK**：云盘备份
     * @example `UDM_ECS`
     */
    "SourceType": string;
    /**
     * 查询开始时间。UNIX格式时间戳，单位为秒。
     * @example `1642057551`
     */
    "StartTime": number;
    /**
     * 查询截止时间。UNIX格式时间戳，单位为秒。
     * @example `1643092168`
     */
    "EndTime": number;
    /**
     * 整机所在地域ID。
     * @example `cn-hangzhou`
     */
    "UdmRegionId": string;
    /**
     * ECS实例ID。
     * @example `i-bp18x2k7sw925ir7ofh8`
     */
    "InstanceId"?: string;
    /**
     * 云盘ID。
     * @example `d-bp1560750pclffpzxy70`
     */
    "DiskId"?: string;
    /**
     * 备份任务ID。
     * @example `job-*********************`
     */
    "JobId"?: string;
    /**
     * 快照列表。
     * @example `[\"s-000e3vhhu62xsm6v92r0\"]`
     */
    "SnapshotIds"?: any;
}
