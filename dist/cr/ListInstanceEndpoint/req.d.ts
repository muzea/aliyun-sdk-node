export interface ListInstanceEndpointRequest {
    /**
     * 仓库实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 设置访问的模块，取值：
     * - `Registry`：访问镜像仓库
     * - `Chart`：访问Helm Chart
     * @example `Chart`
     */
    "ModuleName"?: string;
    "Summary"?: boolean;
}
