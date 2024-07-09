export interface DescribeUserTagsResponse {
    /**
     * 请求ID。
     * @example `34AB41F1-04A5-496F-8C8D-634BDBE6A9FB`
     */
    RequestId: string;
    /**
     * 标签列表。
     */
    Tags: {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值列表。
         */
        Value: string[];
    }[];
}
