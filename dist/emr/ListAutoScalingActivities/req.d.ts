export interface ListAutoScalingActivitiesRequest {
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
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 节点组ID。
     * @example `ng-869471354ecd****`
     */
    "NodeGroupId"?: string;
    /**
     * 伸缩规则名称。
     * @example `scale-out-by-memroy`
     */
    "ScalingRuleName"?: string;
    /**
     * 伸缩活动状态。数组元数个数N的取值范围：1~20。
     * @example `["REJECTED","SUCCESSFUL"]`
     */
    "ScalingActivityStates"?: string[];
    /**
     * 伸缩活动类型。取值范围：
     * - SCALE_OUT：扩容。
     * - SCALE_IN：缩容。
     * @example `SCALE_IN`
     */
    "ScalingActivityType"?: string;
    /**
     * 查询伸缩活动创建时间的开始时间戳。单位为毫秒。
     * @example `1639714634819`
     */
    "StartTime"?: number;
    /**
     * 查询伸缩活动创建时间的结束时间戳。单位为毫秒。
     * @example `1639718634819`
     */
    "EndTime"?: number;
}
