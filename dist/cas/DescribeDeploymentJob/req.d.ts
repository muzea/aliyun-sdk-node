export interface DescribeDeploymentJobRequest {
    /**
     * 部署任务ID。此处ID为[CreateDeploymentJob](~~2712234~~)返回的任务**ID**。也可通过[ListDeploymentJob](~~2712223~~)接口获取。
     * @example `8888`
     */
    "JobId": number;
}
