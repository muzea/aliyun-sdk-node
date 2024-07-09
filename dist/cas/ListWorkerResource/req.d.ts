export interface ListWorkerResourceRequest {
    /**
     * 部署任务ID。此处ID为[CreateDeploymentJob](~~2712234~~)返回的任务**ID**。也可通过[ListDeploymentJob](~~2712223~~)接口获取。
     * @example `8888`
     */
    "JobId": number;
    /**
     * Worker任务状态。
     * @example `editing`
     */
    "Status"?: string;
    /**
     * 部署任务中对应的云产品。
     * @example `NLB`
     */
    "CloudProduct"?: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页，设置每页展示的任务个数，默认50。
     * @example `50`
     */
    "ShowSize"?: number;
}
