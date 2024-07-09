export interface OperateCommonTargetConfigRequest {
    /**
     * 访问源的ip地址。
     * @example `182.92.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 开关类型。取值：
     * - **alidetect-scan-enable**：本地文件检测仅在本地检测。
     * - **ACTION-TRIAL-PERMISSION**：操作审计数据投递。
     * - **alidetect**：本地文件检测引擎。
     * - **container\_prevent\_escape**：容器防逃逸。
     * - **image_repo**：仓库镜像扫描
     * - **proc\_filter\_switch**：日志过滤。
     * - **agentless**：无代理检测。
     * - **rasp**：应用防御。
     * - **sensitiveFile**：敏感信息扫描。
     * - **aliscriptengine**：深度检测引擎。
     * - **containerNetwork**：容器可视化。
     * @example `alidetect`
     */
    "Type": string;
    /**
     * 目标资产类型。取值：
     * - **uuid**：服务器UUID。
     * - **Cluster**：集群ID。
     * - **image_repo**：镜像仓库名称。
     * @example `uuid`
     */
    "TargetType"?: string;
    /**
     * 为服务器设置主动防御的参数。包括以下参数：
     * - **targetType**：防御配置的维度，目前支持UUID维度，固定值：**uuid**。
     * - **target**：需要设置防御配置的服务器的UUID。
     * - **flag**：为服务器开启或关闭主动防御，可选择**add**（开启）或**del**（关闭）。
     * @example `[
          {
                "targetType": "uuid",
                "target": "f329a044-6a2f-49a0-9d33-352f6c1d****",
                "flag": "del"
          }
    ]`
     */
    "TargetOperations": string;
    /**
     * 镜像开关目标类型。取值：
     * - **repoName**： 仓库名称。
     * - **repoNamespace**： 仓库命名空间名称。
     * @example `repoName`
     */
    "FieldName"?: string;
    /**
     * 仓库名称或者仓库命名空间名称。
     * @example `cafcmc-dev`
     */
    "FieldValue"?: string;
}
