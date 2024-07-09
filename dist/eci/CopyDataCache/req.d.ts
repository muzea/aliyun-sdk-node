export interface CopyDataCacheRequest {
    /**
     * 已有数据缓存所在地域。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 数据缓存Bucket。
     * @example `default`
     */
    "Bucket"?: string;
    /**
     * 数据缓存路径
     * @example `/bucket-test`
     */
    "Path"?: string;
    /**
     * 数据缓存名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 数据缓存保留天数。
     * @example `7`
     */
    "RetentionDays"?: number;
    /**
     * 数据缓存标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
    /**
     * 数据缓存所属资源组 。
     * @example `rg-2df3isufhi38****`
     */
    "ResourceGroupId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 数据缓存ID。
     * @example `edc-bp15l4vvys94oo******
    `
     */
    "DataCacheId": string;
    /**
     * 要拷贝到的目的地域。
     * @example `cn-hangzhou`
     */
    "DestinationRegionId": string;
}
