export interface DeleteDataCacheRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据缓存ID。
     * @example `edc-bp1a7n7uawwwol******`
     */
    "DataCacheId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `5e74729e-ce21-4c3e-9163-cbaf0f02768e`
     */
    "ClientToken"?: string;
    /**
     * 数据缓存Bucket。默认为default。
     * @example `default`
     */
    "Bucket"?: string;
    /**
     * 数据缓存对应Virtual Host的目录。
     * @example `/data/models/`
     */
    "Path"?: string;
}
