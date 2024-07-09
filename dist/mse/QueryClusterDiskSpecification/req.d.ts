export interface QueryClusterDiskSpecificationRequest {
    /**
     * 集群类型，包括ZooKeeper、Nacos-Ans和Eureka。
     * @example `ZooKeeper`
     */
    "ClusterType"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
