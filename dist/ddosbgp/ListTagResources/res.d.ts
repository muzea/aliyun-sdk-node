export interface ListTagResourcesResponse {
    /**
     * 本次调用返回的查询凭证（Token）。
     * @example `RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****`
     */
    NextToken: string;
    /**
     * 本次请求的ID。
     * @example `C3F7E6AE-43B2-4730-B6A3-FD17552B8F65`
     */
    RequestId: string;
    TagResources: {
        /**
         * DDoS原生防护实例绑定的标签列表。
         */
        TagResource: {
            /**
             * 实例绑定的标签值。
             * @example `testValue1`
             */
            TagValue: string;
            /**
             * 资源类型。取值固定为**INSTANCE**，表示实例。
             * @example `INSTANCE`
             */
            ResourceType: string;
            /**
             * DDoS原生防护实例ID。
             * @example `ddosbgp-cn-n6w1r7nz****`
             */
            ResourceId: string;
            /**
             * 实例绑定的标签键。
             * @example `testKey1`
             */
            TagKey: string;
        }[];
    };
}
