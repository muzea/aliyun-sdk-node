export interface DescribeInstanceAttachmentAttributesResponse {
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例状态列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 符合查询条件的记录条数。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 实例匹配的私有池信息组成的集合。
         */
        Instance: {
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4****`
             */
            InstanceId: string;
            /**
             * 实例的私有池匹配模式。可能值：
             * - Open：开放模式。实例自动匹配开放类型的私有池。
             * - Target：指定模式。实例匹配指定的私有池。
             * - None：不使用模式。实例不使用私有池。
             * @example `Open`
             */
            PrivatePoolOptionsMatchCriteria: string;
            /**
             * 私有池ID。当`PrivatePoolOptionsMatchCriteria`返回值为`Open`时，私有池ID为系统自动匹配时所分配的私有池ID。
             * @example `eap-bp67acfmxazb4****`
             */
            PrivatePoolOptionsId: string;
        }[];
    };
}
