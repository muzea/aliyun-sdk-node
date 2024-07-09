export interface DescribeScdnRefreshQuotaResponse {
    /**
     * 封禁上限
     * @example `100`
     */
    BlockQuota: string;
    /**
     * 当天剩余预热数量
     * @example `400`
     */
    PreloadRemain: string;
    /**
     * 请求ID
     * @example `42E0554B-80F4-4921-AED6-ACFB22CAAAD0`
     */
    RequestId: string;
    /**
     * 封禁余量
     * @example `100`
     */
    blockRemain: string;
    /**
     * 当天剩余目录刷新数量
     * @example `99`
     */
    DirRemain: string;
    /**
     * 当天剩余URL刷新数量
     * @example `1996`
     */
    UrlRemain: string;
    /**
     * 当天路径刷新数量上限
     * @example `100`
     */
    DirQuota: string;
    /**
     * 当天URL刷新数量上限
     * @example `2000`
     */
    UrlQuota: string;
    /**
     * 当天预热数量上限
     * @example `500`
     */
    PreloadQuota: string;
}
