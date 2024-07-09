export interface ListResourceHealthInspectionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置，置空表示从头开始。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。取值范围：1~100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询的目标资源类型，合法值：
     * <p>
     * - APPLICATION
     * <p>
     * - COMPONENT
     * <p>
     * - COMPONENT_INSTANCE
     * <p>
     * @example `APPLICATION`
     */
    "ResourceType"?: string;
    /**
     * 应用名称。
     * @example `HDFS`
     */
    "ApplicationName"?: string;
    /**
     * 组件名称。
     * @example `DataNode`
     */
    "ComponentName"?: string;
    /**
     * 节点Id列表。
     * @example `["i-bp14l5n4v46uxsscl033"]`
     */
    "NodeIds"?: string[];
    /**
     * 节点名称列表。
     * @example `["core1-1"]`
     */
    "NodeNames"?: string[];
    /**
     * 健康状态。
     * @example `["BAD"]`
     */
    "HealthStatuses"?: string[];
    /**
     * 语言
     */
    "Language"?: string;
}
