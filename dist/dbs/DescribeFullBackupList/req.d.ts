export interface DescribeFullBackupListRequest {
    /**
     * 备份计划ID。
     * @example `dbsr179qz******`
     */
    "BackupPlanId": string;
    /**
     * 每页的记录数，取值：
     * - 30
     * - 50
     * - 100
     * 默认为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于等于0且不超过Integer的最大值，默认值为：0。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 是否显示存储类型。
     * @example `true`
     */
    "ShowStorageType"?: boolean;
    /**
     * 备份集ID。
     * @example `1iukx5h******`
     */
    "BackupSetId"?: string;
    /**
     * 开始备份时间。
     * @example `1676887100`
     */
    "StartTimestamp"?: number;
    /**
     * 结束备份时间。
     * @example `1676887128`
     */
    "EndTimestamp"?: number;
}
