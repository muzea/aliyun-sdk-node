export interface ListConsumerGroupsRequest {
    /**
     * 指定需要获取哪个实例下的消费者分组列表。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 查询的过滤条件，若不输入则查询指定实例下所有的消费者分组。
     * @example `CID-TEST`
     */
    "filter"?: string;
    /**
     * 分页页码，查询第几页的返回结果。
     * @example `1`
     */
    "pageNumber": number;
    /**
     * 分页大小，每页最多显示的返回结果数量。
     * 取值范围：[10,100]。
     * @example `10`
     */
    "pageSize": number;
}
