export interface CreateClusterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 付费类型。取值范围：
     * - PayAsYouGo：后付费。
     * - Subscription：预付费。
     * 默认值：PayAsYouGo。
     * @example `PayAsYouGo`
     */
    "PaymentType"?: string;
    /**
     * 预付费配置。当PaymentType取值为Subscription时必填。
     */
    "SubscriptionConfig"?: any;
    /**
     * 集群类型。取值范围：
     * - DATALAKE：新版数据湖。
     * - OLAP：数据分析。
     * - DATAFLOW：实时数据流。
     * - DATASERVING：数据服务。
     * - CUSTOM：自定义混部集群。
     * - HADOOP：旧版数据湖（不推荐使用，建议使用新版数据湖）。
     * 如果您在2022年12月19日17点（UTC+8）以后第一次创建EMR集群，不能选择HADOOP、DATA_SCIENCE、PRESTO、ZOOKEEPER集群类型。
     * @example `DATALAKE`
     */
    "ClusterType": string;
    /**
     * EMR发行版。可通过EMR集群售卖页面查看EMR发行版。
     * @example `EMR-5.8.0`
     */
    "ReleaseVersion": string;
    /**
     * 集群名称。长度为1~128个字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）
     * @example `emrtest`
     */
    "ClusterName": string;
    /**
     * 集群中的应用部署模式。取值范围：
     * - NORMAL（默认值）：非高可用部署。集群1个MASTER节点。
     * - HA：高可用部署。高可用部署要求至少3个MASTER节点。
     * @example `HA`
     */
    "DeployMode"?: string;
    /**
     * 集群Kerberos安全模式。取值范围：
     * - NORMAL（默认值）：普通模式，不开启Kerberos模式。
     * - KERBEROS：开启Kerberos模式。
     * @example `NORMAL`
     */
    "SecurityMode"?: string;
    /**
     * 应用列表。数组元素个数N的取值范围：1~100。
     */
    "Applications": any[];
    /**
     * 应用配置。数组元素个数N的取值范围：1~1000。
     */
    "ApplicationConfigs"?: any[];
    /**
     * 节点属性。集群所有ECS节点基础属性。
     */
    "NodeAttributes": any;
    /**
     * 节点组配置数组。数组元素个数N的取值范围：1~100。
     * @example `NORMAL`
     */
    "NodeGroups": any[];
    /**
     * 引导脚本数组。数组元素个数N的取值范围：1~10。
     */
    "BootstrapScripts"?: any[];
    /**
     * 标签。数组元数个数N的取值范围：0~20。
     * @example `A7D960FA-6DBA-5E07-8746-A63E3E4D****`
     */
    "Tags"?: any[];
    /**
     * 幂等客户端TOKEN。同一个ClientToken多次调用的返回结果一致，同一个ClientToken最多只创建一个集群。
     * @example `A7D960FA-6DBA-5E07-8746-A63E3E4D****`
     */
    "ClientToken"?: string;
}
