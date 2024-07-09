export interface ListLiveChannelRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 设定结果从marker之后按字母排序的第一个开始返回。
     * @example `channel-1`
     */
    "marker"?: string;
    /**
     * 限定此次返回LiveChannel的最大数。max-keys取值不能大于1000。
     * 默认值：100
     * @example `100`
     */
    "max-keys"?: number;
    /**
     * 限定返回的LiveChannel必须以prefix作为前缀。注意使用prefix查询时，返回的key中仍会包含prefix。
     * @example `fun/`
     */
    "prefix"?: string;
}
