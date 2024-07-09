export interface ListRecycleBinJobsRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 任务ID。
     * @example `rb-15****ed-r-1625****2441`
     */
    "JobId"?: string;
    /**
     * 分页查询时每页的行数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时当前的页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务状态。取值：
     * - Running：运行中
     * - Defragmenting：数据整理中
     * - PartialSuccess：部分运行成功
     * - Success：运行成功
     * - Fail：运行失败
     * - Cancelled：已取消
     * - All（默认值）：全部
     * @example `All`
     */
    "Status"?: string;
}
