export interface UpdateDeploymentJobStatusRequest {
    /**
     * 部署任务ID。此处ID为[CreateDeploymentJob](~~2712234~~)返回的任务**ID**。也可通过[ListDeploymentJob](~~2712223~~)接口获取。
     * @example `8888`
     */
    "JobId": number;
    /**
     * 目标状态。部署任务状态为**部署失败**或**部署成功**，任务状态则不允许变更。查看部署任务状态，请参见[DescribeDeploymentJobStatus](~~2712225~~)。
     * @example `editing`
     */
    "Status": string;
}
