export interface CreateInstanceEndpointAclPolicyRequest {
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
     * 允许访问的IP段
     * @example `192.168.1.1/32`
     */
    "Entry": string;
    /**
     * 说明
     * @example `test`
     */
    "Comment"?: string;
    /**
     * 需要设置访问策略的模块，取值：
     * - `Registry`：访问镜像仓库
     * - `Chart`：访问Helm Chart
     * @example `Registry`
     */
    "ModuleName"?: string;
}
