export interface ListInspectionHistoryRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId"?: string;
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
     * 巡检历史类型 application/component
     */
    "Type"?: string;
    /**
     * 服务名称
     */
    "Service"?: string;
    /**
     * 组件名称
     */
    "Component"?: string;
    /**
     * 节点id
     */
    "InstanceId"?: string;
    "Language"?: string;
}
