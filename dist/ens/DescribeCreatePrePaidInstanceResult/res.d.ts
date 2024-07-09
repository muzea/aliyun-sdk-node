export interface DescribeCreatePrePaidInstanceResultResponse {
    /**
     * 实例创建返回结果列表。
     */
    InstanceCreateResult: {
        /**
         * 实例创建状态。
         * - Accepted：已受理。
         * - Creating：创建中。
         * - Failed：创建失败。
         * - Successed：创建成功。
         * @example `Successed`
         */
        InstanceCreateStatus: string;
        /**
         * 实例ID。
         * @example `i-6ecpqvkicnchxccozrpxxxx`
         */
        InstanceId: string;
    };
    /**
     * 请求ID。
     * @example `AAE90880-4970-4D81-A534-A6C0F3631F74`
     */
    RequestId: string;
}
