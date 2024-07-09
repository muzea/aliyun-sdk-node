export interface UpdateEventCenterRuleRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 事件规则ID
     * @example `crecr-n6pbhgjxt*****`
     */
    "RuleId": string;
    /**
     * 规则名称
     * @example `chain-demo`
     */
    "RuleName"?: string;
    /**
     * 事件通道
     * @example `EVENT_BRIDGE`
     */
    "EventChannel"?: string;
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
     * 事件范围，取值：
     * - `INSTANCE`：实例
     * - `NAMESPACE`：命名空间
     * - `REPO`：镜像仓库
     * 默认值：`INSTANCE`
     * @example `INSTANCE`
     */
    "EventScope"?: string;
    /**
     * 事件规则生效的命名空间
     * @example `ns`
     */
    "Namespaces"?: string[];
    /**
     * 事件规则生效的仓库名称
     * @example `reponame`
     */
    "RepoNames"?: string[];
    /**
     * 事件触发的tag过滤规则
     * @example `.*`
     */
    "RepoTagFilterPattern"?: string;
    /**
     * 事件配置
     * @example `{
            "notifyMethod":"http",
            "notifyConfig":{
                "Url":"http://www.aliyundoc.com",
                "id":"MaAV3HgTkO5Fh8l1V********",
            },
            "notifyFilter":{}
        }`
     */
    "EventConfig"?: string;
}
