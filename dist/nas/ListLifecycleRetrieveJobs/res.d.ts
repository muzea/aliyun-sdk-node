export interface ListLifecycleRetrieveJobsResponse {
    /**
     * 数据取回任务总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `BC7C825C-5F65-4B56-BEF6-98C56C7C****`
     */
    RequestId: string;
    /**
     * 每个分页包含的数据取回任务个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据取回任务信息集合。
     */
    LifecycleRetrieveJobs: {
        /**
         * 文件系统ID。
         * @example `31a8e4****`
         */
        FileSystemId: string;
        /**
         * 数据取回任务的状态。包括：
         * - active：运行中。
         * - canceled ：已取消。
         * - completed：已完成。
         * - failed：已失败。
         * @example `completed`
         */
        Status: string;
        /**
         * 执行数据取回任务读取文件的总个数。
         * @example `100`
         */
        DiscoveredFileCount: number;
        /**
         * 任务更新时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2021-02-30T11:08:08Z`
         */
        UpdateTime: string;
        /**
         * 指定取回任务的执行路径。
         */
        Paths: string[];
        /**
         * 执行数据取回任务成功取回的文件个数。
         * @example `80`
         */
        RetrievedFileCount: number;
        /**
         * 数据取回任务ID。
         * @example `lrj-nfstest-ia-160****853-hshvw`
         */
        JobId: string;
        /**
         * 任务创建时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2021-02-30T10:08:08Z`
         */
        CreateTime: string;
        /**
         * 分级存储类型。
         * - InfrequentAccess：低频存储。
         * - Archive：归档存储。
         * @example `InfrequentAccess`
         */
        StorageType: string;
    }[];
}
