export interface ListEventCenterRecordRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 事件类型，取值：
     * - `cr:Artifact:DeliveryChainCompleted`：交付链处理完成
     * - `cr:Artifact:SynchronizationCompleted`：镜像同步完成
     * - `cr:Artifact:BuildCompleted`：镜像构建完成
     * - `cr:Artifact:ScanCompleted`：镜像扫描完成
     * - `cr:Artifact:SigningCompleted`：镜像加签完成
     * @example `cr:Artifact:DeliveryChainCompleted`
     */
    "EventType"?: string;
    /**
     * 事件规则ID
     * @example `crecr-n6pbhgjxtla***`
     */
    "RuleId"?: string;
    "RepoNamespaceName"?: string;
    "RepoName"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `30`
     */
    "PageSize"?: number;
}
