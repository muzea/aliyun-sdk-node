export interface DescribeVodRefreshQuotaResponse {
    /**
     * 当日存储刷新数量上限。
     * @example `500`
     */
    BlockQuota: string;
    /**
     * 当天剩余预热数量。
     * @example `500`
     */
    PreloadRemain: string;
    /**
     * 请求ID。
     * @example `42E0554B-80F4-4921-****-ACFB22CAAAD0`
     */
    RequestId: string;
    /**
     * 当日剩余存储刷新数量。
     * @example `500`
     */
    blockRemain: string;
    /**
     * 当日剩余目录刷新数量。
     * @example `99`
     */
    DirRemain: string;
    /**
     * 当日剩余URL刷新数量。
     * @example `1996`
     */
    UrlRemain: string;
    /**
     * 当日路径刷新数量上限。
     * @example `100`
     */
    DirQuota: string;
    /**
     * 当日URL刷新数量上限。
     * @example `2000`
     */
    UrlQuota: string;
    /**
     * 当天预热数量上限。
     * @example `500`
     */
    PreloadQuota: string;
}
