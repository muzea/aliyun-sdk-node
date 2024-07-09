export interface DescribeTagResourcesResponse {
    /**
     * 本次调用返回的查询凭证（Token）。
     * @example `RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****`
     */
    NextToken: string;
    /**
     * 本次请求的ID。
     * @example `36E698F7-48A4-48D0-9554-0BB4BAAB99B3`
     */
    RequestId: string;
    TagResources: {
        /**
         * DDoS高防（中国内地）实例绑定的标签列表。
         */
        TagResource: {
            /**
             * DDoS高防（中国内地）实例绑定的标签值。
             * @example `testkey`
             */
            TagValue: string;
            /**
             * 资源类型。取值固定为**INSTANCE**，表示DDoS高防实例。
             * @example `INSTANCE`
             */
            ResourceType: string;
            /**
             * DDoS高防（中国内地）实例的ID。
             * @example `ddoscoo-cn-zz121ogz****`
             */
            ResourceId: string;
            /**
             * DDoS高防（中国内地）实例绑定的标签键。
             * @example `testvalue`
             */
            TagKey: string;
        }[];
    };
}
