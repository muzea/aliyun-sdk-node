export interface DescribeCdnUserQuotaResponse {
    /**
     * 封禁上限，单位：个。
     * @example `100`
     */
    BlockQuota: number;
    /**
     * 刷新URL余量，单位：个。
     * @example `2000`
     */
    RefreshUrlRemain: number;
    /**
     * 加速域名数上限，单位：个。
     * @example `50`
     */
    DomainQuota: number;
    /**
     * 封禁余量，单位：个。
     * @example `100`
     */
    BlockRemain: number;
    /**
     * 预热URL余量，单位：个。
     * @example `100`
     */
    PreloadRemain: number;
    /**
     * 请求ID。
     * @example `EF4F084A-2F49-4E1C-9CA0-DC85BCE7F391`
     */
    RequestId: string;
    /**
     * 刷新URL上限，单位：个。
     * @example `2000`
     */
    RefreshUrlQuota: number;
    /**
     * 预热URL上限，单位：个。
     * @example `500`
     */
    PreloadQuota: number;
    /**
     * 刷新目录上限，单位：个。
     * @example `100`
     */
    RefreshDirQuota: number;
    /**
     * 刷新目录余量，单位：个。
     * @example `500`
     */
    RefreshDirRemain: number;
    /**
     * 忽略参数刷新上限，单位：个。
     * @example `100`
     */
    IgnoreParamsQuota: number;
    /**
     * 忽略参数刷新余量，单位：个。
     * @example `10`
     */
    IgnoreParamsRemain: number;
}
