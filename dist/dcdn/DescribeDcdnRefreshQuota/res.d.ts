export interface DescribeDcdnRefreshQuotaResponse {
    /**
     * 封禁上限，单位：个。
     * @example `100`
     */
    BlockQuota: string;
    /**
     * 当天剩余正则刷新数量，单位：个。
     * @example `100`
     */
    RegexRemain: string;
    /**
     * 当天剩余封禁数量，单位：个。
     * @example `100`
     */
    BlockRemain: string;
    /**
     * 当天剩余预热URL数量，单位：个。
     * @example `500`
     */
    PreloadRemain: string;
    /**
     * 请求ID。
     * @example `42E0554B-80F4-4921-AED6-ACFB22CAAAD0`
     */
    RequestId: string;
    /**
     * 当天剩余刷新目录数量，单位：个。
     * @example `100`
     */
    DirRemain: string;
    /**
     * 当天剩余刷新URL数量，单位：个。
     * @example `2000`
     */
    UrlRemain: string;
    /**
     * 当天刷新目录数量上限，单位：个。
     * @example `100`
     */
    DirQuota: string;
    /**
     * 当天刷新URL数量上限，单位：个。
     * @example `2000`
     */
    UrlQuota: string;
    /**
     * 当天预热URL数量上限，单位：个。
     * @example `500`
     */
    PreloadQuota: string;
    /**
     * 当天正则刷新数量上限，单位：个。
     * @example `100`
     */
    RegexQuota: string;
    /**
     * 当天忽略参数刷新数量上限，单位：个。
     * @example `100`
     */
    IgnoreParamsQuota: string;
    /**
     * 当天剩余忽略参数刷新数量，单位：个。
     * @example `10`
     */
    IgnoreParamsRemain: string;
}
