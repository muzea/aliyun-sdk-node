export interface DescribeCapacityReservationInstancesResponse {
    /**
     * 容量预定服务下一个查询起始标志。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 符合查询条件的记录条数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 容量预定服务每页显示行数。
     * @example `10`
     */
    MaxResults: number;
    CapacityReservationItem: {
        /**
         * 容量预定服务已匹配的实例列表。
         */
        InstanceIdSet: {
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4****`
             */
            InstanceId: string;
        }[];
    };
}
