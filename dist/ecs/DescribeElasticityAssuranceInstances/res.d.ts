export interface DescribeElasticityAssuranceInstancesResponse {
    /**
     * 弹性保障服务下一个查询起始标志。
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
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时每页行数。
     * @example `10`
     */
    MaxResults: number;
    ElasticityAssuranceItem: {
        /**
         * 弹性保障服务已匹配的实例列表。
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
