export interface ListTagResourcesResponse {
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `014738E0-3C7F-47D8-8FB9-469500C6F387`
     */
    RequestId: string;
    /**
     * 资源绑定的标签信息。
     */
    TagResources: {
        /**
         * 资源ARN。
         * @example `arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****`
         */
        ResourceARN: string;
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `k1`
             */
            Key: string;
            /**
             * 标签值。
             * @example `v1`
             */
            Value: string;
            /**
             * 标签类型。取值：
             * - Custom：自定义标签。
             * - System：系统标签。
             * @example `Custom`
             */
            Category: string;
        }[];
    }[];
}
