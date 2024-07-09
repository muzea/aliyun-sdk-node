export interface ListRecycleBinJobsResponse {
    /**
     * 请求ID。
     * @example `9E15E394-38A6-457A-A62A-D9797C9A****`
     */
    RequestId: string;
    /**
     * 回收站中任务的总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每个分页包含的任务个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 回收站中的任务信息集合。
     */
    Jobs: {
        /**
         * 任务ID。
         * @example `8C****C54`
         */
        Id: string;
        /**
         * 任务类型。包括：
         * - Restore：文件恢复任务
         * - Delete：文件删除任务
         * @example `Restore`
         */
        Type: string;
        /**
         * 任务对应文件或目录的FileId。
         * @example `04***08`
         */
        FileId: string;
        /**
         * 任务状态。包括：
         * - Running：运行中
         * - Defragmenting：数据整理中
         * - PartialSuccess：部分运行成功
         * - Success：运行成功
         * - Fail：运行失败
         * - Cancelled：已取消
         * @example `Running`
         */
        Status: string;
        /**
         * 错误码。
         * 当Status为Fail或PartialSuccess时，该返回值有效。
         * @example `无`
         */
        ErrorCode: string;
        /**
         * 查询任务的执行进度。
         * 取值范围：1~100
         * @example `100`
         */
        Progress: string;
        /**
         * 任务创建时间。
         * @example `2021-05-30T10:08:08Z`
         */
        CreateTime: string;
        /**
         * 任务对应文件或目录的名称。
         * @example `test001`
         */
        FileName: string;
        /**
         * 错误信息。
         * 当JobStatus为Fail或PartialSuccess时，该返回值有效。
         * @example `无`
         */
        ErrorMessage: string;
    }[];
}
