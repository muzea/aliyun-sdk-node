export interface DescribeRefreshQuotaResponse {
    /**
     * 当天L2节点剩余预热数量。
     * @example `400`
     */
    PreloadRemain: string;
    /**
     * 当天剩余封禁数量。
     * @example `100`
     */
    BlockRemain: string;
    /**
     * 当天剩余正则刷新数量。
     * @example `10`
     */
    RegexRemain: string;
    /**
     * 当天剩余URL刷新数量。
     * @example `1996`
     */
    UrlRemain: string;
    /**
     * 当天剩余目录刷新数量。
     * @example `99`
     */
    DirRemain: string;
    /**
     * 当天URL刷新数量上限。
     * @example `2000`
     */
    UrlQuota: string;
    /**
     * 当天封禁数量上限。
     * @example `300`
     */
    BlockQuota: string;
    /**
     * 请求ID。
     * @example `42E0554B-80F4-4921-AED6-ACFB22CAAAD0`
     */
    RequestId: string;
    /**
     * 当天目录刷新数量上限。
     * @example `100`
     */
    DirQuota: string;
    /**
     * 当天L1节点预热数量上限。
     * @example `20`
     */
    PreloadEdgeQuota: string;
    /**
     * 当前L1节点剩余预热数量。
     * @example `20`
     */
    PreloadEdgeRemain: string;
    /**
     * 当天L2节点预热数量上限。
     * @example `500`
     */
    PreloadQuota: string;
    /**
     * 当天正则刷新数量上限。
     * @example `20`
     */
    RegexQuota: string;
    /**
     * 当天忽略参数刷新数量上限。
     * @example `100`
     */
    IgnoreParamsQuota: string;
    /**
     * 当天剩余忽略参数刷新数量。
     * @example `10`
     */
    IgnoreParamsRemain: string;
}
