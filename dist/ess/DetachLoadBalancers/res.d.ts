export interface DetachLoadBalancersResponse {
    /**
     * 伸缩活动的ID。仅当async=true时返回该值。您可使用API describescalingactivities遍历查询返回的伸缩活动id，查看伸缩活动的执行状态。
     * @example `asa-bp140qd7mak8k63f****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
}
