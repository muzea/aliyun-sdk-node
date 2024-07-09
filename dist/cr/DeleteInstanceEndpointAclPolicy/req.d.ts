export interface DeleteInstanceEndpointAclPolicyRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 端点类型，只支持 Internet
     * @example `internet`
     */
    "EndpointType": string;
    /**
     * IP段
     * @example `127.0.0.1/32`
     */
    "Entry": string;
    /**
     * 设置访问策略的模块，取值：
     * - `Registry`：访问镜像仓库
     * - `Chart`：访问Helm Chart
     * @example `Chart`
     */
    "ModuleName"?: string;
}
