export interface ListAllMediaBucketRequest {
    /**
     * 下一页标识。第一次请求无需传入，服务会返回此Token，第二次请求传入即可。
     * @example `P2Zqo1PLGhZdygo-ajSsjUX5zrBHCgXy6j4hEvv****`
     */
    "NextPageToken"?: string;
    /**
     * 本次请求可返回的媒体Bucket数目最大值。取值范围：1~100，默认值：50。
     * @example `10`
     */
    "MaximumPageSize"?: number;
}
