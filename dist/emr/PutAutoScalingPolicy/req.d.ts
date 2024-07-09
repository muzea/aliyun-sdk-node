export interface PutAutoScalingPolicyRequest {
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
     * 节点组ID。
     * @example `ng-869471354ecd****`
     */
    "NodeGroupId": string;
    /**
     * 弹性伸缩规则描述列表。数组元数个数N的取值范围：0~100。
     */
    "ScalingRules"?: any[];
    /**
     * 节点组最大最小值约束。
     */
    "Constraints"?: any;
}
