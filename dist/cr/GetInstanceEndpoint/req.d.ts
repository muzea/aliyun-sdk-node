export interface GetInstanceEndpointRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 端点类型，只支持Internet
     * @example `internet`
     */
    "EndpointType": string;
    /**
     * 访问模块，取值：
     * - `Registry`：镜像仓库
     * - `Chart`：Helm Chart
     * @example `Registry`
     */
    "ModuleName"?: string;
}
