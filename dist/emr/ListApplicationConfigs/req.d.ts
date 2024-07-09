export interface ListApplicationConfigsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-e6a9d46e9267****`
     */
    "ClusterId": string;
    /**
     * 下页页码。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 分页大小。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 应用名。
     * @example `HDFS`
     */
    "ApplicationName"?: string;
    /**
     * 节点组ID。
     * @example `ng-d555335ced5c****`
     */
    "NodeGroupId"?: string;
    /**
     * 配置文件名称。
     * @example `hdfs-site.xml`
     */
    "ConfigFileName"?: string;
    /**
     * 配置项键。
     * @example `dfs.replication`
     */
    "ConfigItemKey"?: string;
    /**
     * 配置项值。
     * @example `2`
     */
    "ConfigItemValue"?: string;
    /**
     * 节点ID。
     * @example `i-bp10h9rezawz1i4o****`
     */
    "NodeId"?: string;
}
