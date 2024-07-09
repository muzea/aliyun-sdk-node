export interface ListLifecycleRetrieveJobsRequest {
    /**
     * 每个分页包含的数据取回任务个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId"?: string;
    /**
     * 数据取回任务的状态。取值：
     * - active：运行中。
     * - canceled ：已取消。
     * - completed：已完成。
     * - failed：已失败。
     * @example `completed`
     */
    "Status"?: string;
    /**
     * 分级存储类型。
     * - InfrequentAccess：低频存储。
     * - Archive：归档存储。
     * > 如未指定 StorageType，则返回所有类型的数据取回任务信息。
     * @example `InfrequentAccess`
     */
    "StorageType"?: string;
}
