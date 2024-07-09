export interface DeleteCdnDeliverTaskRequest {
    /**
     * 待删除的订阅任务ID。您可以调用[DescribeCdnDeliverList](~~270877~~)接口查询订阅任务ID。
     * @example `1`
     */
    "DeliverId": number;
}
