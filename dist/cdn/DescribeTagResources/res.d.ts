export interface DescribeTagResourcesResponse {
    /**
     * 请求ID。
     * @example `34AB41F1-04A5-496F-8C8D-634BDBE6A9FB`
     */
    RequestId: string;
    /**
     * 标签资源列表。
     */
    TagResources: {
        /**
         * 资源ID。
         * @example `example.com`
         */
        ResourceId: string;
        /**
         * 标签列表。
         */
        Tag: {
            /**
             * 标签键。
             * @example `env`
             */
            Key: string;
            /**
             * 标签值。
             * @example `product`
             */
            Value: string;
        }[];
    }[];
}
