export interface UpdateWorkerResourceStatusRequest {
    /**
     * 部署任务ID。此处ID为[CreateDeploymentJob](~~2712234~~)返回的任务**ID**。也可通过[ListDeploymentJob](~~2712223~~)接口获取。
     * @example `8888`
     */
    "JobId": number;
    /**
     * 部署任务Worker ID。此处ID可通过[ListWorkerResource](~~2712224~~)接口获取。
     * @example `1234`
     */
    "WorkerId": number;
    /**
     * 目标状态。
     * @example `scheduling`
     */
    "Status": string;
}
