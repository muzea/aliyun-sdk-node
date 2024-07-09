export interface ListInstanceTypesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId"?: string;
    /**
     * 可用区ID。
     * @example `cn-beijing-h`
     */
    "ZoneId": string;
    /**
     * 节点组ID。
     * @example `G-F06C4B47966A****`
     */
    "NodeGroupId"?: string;
    /**
     * 集群类型。
     * @example `DATALAKE`
     */
    "ClusterType": string;
    /**
     * 付费类型。
     * @example `PayAsYouGo`
     */
    "PaymentType": string;
    /**
     * 节点组类型。
     * @example `CORE`
     */
    "NodeGroupType": string;
    /**
     * 是否变配。
     * @example `false`
     */
    "IsModification"?: boolean;
    /**
     * EMR发行版。
     * @example `线上已发布版本EMR-5.8.0`
     */
    "ReleaseVersion"?: string;
    /**
     * 部署模式。
     * @example `HA`
     */
    "DeployMode"?: string;
    /**
     * 机型
     * @example `ecs.g6.xlarge`
     */
    "InstanceType"?: string;
}
