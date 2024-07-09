export interface DescribeScdnUserQuotaResponse {
    /**
     * 封禁上限。
     * @example `20`
     */
    BlockQuota: number;
    /**
     * 当天剩余URL刷新数量。
     * @example `100`
     */
    RefreshUrlRemain: number;
    /**
     * 加速域名数上限。
     * @example `50`
     */
    DomainQuota: number;
    /**
     * 封禁余量。
     * @example `500`
     */
    BlockRemain: number;
    /**
     * 当天剩余预热数量。
     * @example `300`
     */
    PreloadRemain: number;
    /**
     * 请求ID。
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
    /**
     * 当天URL刷新数量上限。
     * @example `100`
     */
    RefreshUrlQuota: number;
    /**
     * 当天预热数量上限。
     * @example `500`
     */
    PreloadQuota: number;
    /**
     * 当天路径刷新数量上限。
     * @example `100`
     */
    RefreshDirQuota: number;
    /**
     * 当天剩余目录刷新数量。
     * @example `100`
     */
    RefreshDirRemain: number;
}
