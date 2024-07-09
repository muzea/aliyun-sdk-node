export interface DescribeCdnDeliverListRequest {
    /**
     * 待查询的订阅任务ID。如果不传该参数，默认返回所有的订阅任务。
     * @example `3`
     */
    "DeliverId"?: number;
}
