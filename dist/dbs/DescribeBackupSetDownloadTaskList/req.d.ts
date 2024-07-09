export interface DescribeBackupSetDownloadTaskListRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **BackupPlanId**或**BackupSetDownloadTaskId**任选其一作为请求参数必填项。
     * @example `dbsqhnuhyw3****`
     */
    "BackupPlanId"?: string;
    /**
     * 备份集下载任务ID。
     * - 全量备份：可通过调用[CreateFullBackupSetDownload](~~437241~~)接口获取该参数的值。
     * - 增量备份：可通过调用[CreateIncrementBackupSetDownload](~~437242~~)接口获取该参数的值。
     * @example `urxgrxt7****`
     */
    "BackupSetDownloadTaskId"?: string;
    /**
     * 每页的记录数，取值30、50、100。
     * > 默认每页记录数为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于等于0且不超过Integer的最大值，默认值为0。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 输入任意值，用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzXXXXXX`
     */
    "ClientToken"?: string;
}
