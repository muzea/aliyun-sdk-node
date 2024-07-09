export interface DescribeDcdnUserQuotaResponse {
    /**
     * 封禁上限，单位：个。
     * @example `20`
     */
    BlockQuota: number;
    /**
     * 刷新URL余量，单位：个。
     * @example `100`
     */
    RefreshUrlRemain: number;
    /**
     * 加速域名数上限，单位：个。
     * @example `50`
     */
    DomainQuota: number;
    /**
     * 封禁余量，单位：个。
     * @example `500`
     */
    BlockRemain: number;
    /**
     * 预热余量，单位：个。
     * @example `300`
     */
    PreloadRemain: number;
    /**
     * 请求ID。
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
    /**
     * 刷新URL上限，单位：个。
     * @example `100`
     */
    RefreshUrlQuota: number;
    /**
     * 预热上限，单位：个。
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
     * @example `100`
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
