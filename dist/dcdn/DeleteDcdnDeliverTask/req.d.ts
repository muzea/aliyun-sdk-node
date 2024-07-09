export interface DeleteDcdnDeliverTaskRequest {
    /**
     * 待删除的订阅任务ID。您可以调用[DescribeDcdnDeliverList](~~270043~~)接口查询订阅任务ID。
     * @example `92`
     */
    "DeliverId": number;
}
