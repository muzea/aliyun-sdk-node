export interface ListResourcesByTagResponse {
    /**
     * 请求ID。
     * @example `7D61FF74-61C2-5768-B01F-05FC97F24F35`
     */
    RequestId: string;
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 资源列表。
     */
    Resources: {
        /**
         * 资源ID。
         * @example `vpc-wz9pifyuw26esxd05****`
         */
        ResourceId: string;
        /**
         * 标签信息。
         * 当`IncludeAllTags`为`True`时，返回该参数。
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
             * 资源标签类型。取值：
             * - custom：自定义标签。
             * - system：系统标签。
             * @example `custom`
             */
            Category: string;
        }[];
    }[];
}
