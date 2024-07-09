export interface UpdateMigrationTaskRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 任务ID。
     * @example `1`
     */
    "Id"?: string;
    /**
     * 集群类型。
     * - Nacos-Ans
     * - ZooKeeper
     * - Eureka
     * @example `Nacos-Ans`
     */
    "ClusterType"?: string;
    /**
     * 源实例节点地址。
     * @example `192.168.1.1:8848`
     */
    "OriginInstanceAddress"?: string;
    /**
     * 源实例名称。
     * @example `来源集群`
     */
    "OriginInstanceName"?: string;
    /**
     * 命名空间列表，当来源集群是Nacos时选填。
     * @example `namesapceId1,namesapceId2`
     */
    "OriginInstanceNamespace"?: string;
    /**
     * 目标实例ID。
     * @example `mse-cn-ud82*****`
     */
    "TargetInstanceId"?: string;
    /**
     * 目标实例名称。
     * @example `目标集群`
     */
    "TargetClusterName"?: string;
    /**
     * 目标实例Url。
     * @example `mse-66*****-nacos-ans.mse.aliyuncs.com:8848`
     */
    "TargetClusterUrl"?: string;
    /**
     * 描述。
     * @example `这是一段描述`
     */
    "ProjectDesc"?: string;
    "SyncType"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
