export interface UpdateInstanceEndpointStatusRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 端点类型，只支持Internet
     * @example `internet`
     */
    "EndpointType": string;
    /**
     * 是否开启实例访问入口，取值：
     * - `true`：开启实例访问入口
     * - `false`：关闭实例访问入口
     * @example `false`
     */
    "Enable": boolean;
    /**
     * 设置访问的模块，取值：
     * - `Registry`：访问镜像仓库
     * - `Chart`：访问Helm Chart
     * @example `Chart`
     */
    "ModuleName"?: string;
}
