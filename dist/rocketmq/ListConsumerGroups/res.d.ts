export interface ListConsumerGroupsResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `5503A460-98ED-5543-92CF-4853DE28****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 当前页码。
         * @example `1`
         */
        pageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        pageSize: number;
        /**
         * 返回结果的总数量。
         * @example `1`
         */
        totalCount: number;
        /**
         * 分页数据。
         */
        list: {
            /**
             * 实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            regionId: string;
            /**
             * 实例ID。
             * @example `rmq-cn-7e22ody****`
             */
            instanceId: string;
            /**
             * 消费者分组ID。
             * @example `GID-TEST`
             */
            consumerGroupId: string;
            /**
             * 消费者分组的状态。
             * @example `RUNNING`
             */
            status: string;
            /**
             * 消费者分组的备注信息。
             * @example `This is the remark for test.`
             */
            remark: string;
            /**
             * 消费者分组的创建时间。
             * @example `2022-08-01 20:05:50`
             */
            createTime: string;
            /**
             * 消费者分组的最后更新时间。
             * @example `2022-08-01 20:05:50`
             */
            updateTime: string;
        }[];
    };
    /**
     * 错误码。
     * @example `MissingInstanceId`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter InstanceId is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `instanceId`
     */
    dynamicMessage: string;
}
