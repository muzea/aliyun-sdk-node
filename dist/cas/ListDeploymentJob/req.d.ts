export interface ListDeploymentJobRequest {
    /**
     * 任务类型。
     * @example `user`
     */
    "JobType"?: string;
    /**
     * 部署任务状态。
     * @example `pending`
     */
    "Status"?: string;
    /**
     * 分页。当前页，默认1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，设置每页显示证书的数量。默认值为**50**。
     * @example `50`
     */
    "ShowSize"?: number;
}
