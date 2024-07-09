export interface DescribeDcdnUserTagsResponse {
    /**
     * 请求ID。
     * @example `34AB41F1-04A5-496F-8C8D-634BDBE6A9FB`
     */
    RequestId: string;
    /**
     * 标签。
     */
    Tags: {
        /**
         * 标签键。
         * @example `region`
         */
        Key: string;
        Value: string[];
    }[];
}
