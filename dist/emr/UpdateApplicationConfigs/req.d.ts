export interface UpdateApplicationConfigsRequest {
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
     * 应用名称。
     * @example `HDFS`
     */
    "ApplicationName": string;
    /**
     * 是否刷新配置。
     * 默认值： true。
     * @example `true`
     */
    "RefreshConfig"?: boolean;
    /**
     * 配置项操作。取值范围：
     * - ADD：添加。
     * - UPDATE：更新。
     * - DELETE：删除。
     * @example `ADD`
     */
    "ConfigAction"?: string;
    /**
     * 配置操作范围。取值范围：
     * - CLUSTER：集群级别。
     * - NODE_GROUP：节点组级别。
     * @example `CLUSTER`
     */
    "ConfigScope"?: string;
    /**
     * 应用配置列表。
     * @example `CLUSTER`
     */
    "ApplicationConfigs": any[];
    /**
     * 描述。
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 节点组ID。
     * @example `ng-869471354ecd****`
     */
    "NodeGroupId"?: string;
    /**
     * 节点ID。
     * @example `i-bp1cudc25w2bfwl5****`
     */
    "NodeId"?: string;
}
