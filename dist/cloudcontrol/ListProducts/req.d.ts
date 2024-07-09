export interface ListProductsRequest {
    /**
     * 选择返回产品的语言。
     * zh_CH：中文 （默认）
     * en_US：英文。
     * @example `zh_CH`
     */
    "x-acs-accept-language"?: string;
    /**
     * 云厂商，目前只支持Aliyun。
     * @example `Aliyun`
     */
    "provider": string;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * @example `ECS`
     */
    "nextToken"?: string;
    /**
     * 分页查询时每页行数。最大值为100。
     * 默认值：30。
     * @example `10`
     */
    "maxResults"?: number;
}
