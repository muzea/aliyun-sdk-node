export interface AttachLoadBalancersResponse {
    /**
     * 伸缩活动的ID。
     * 仅当`Async`为`true`时返回该值。您可使用API DescribeScalingActivities遍历查询返回的伸缩活动ID，查看伸缩活动的执行状态。
     * @example `asa-bp140qd7mak8k63f****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
}
