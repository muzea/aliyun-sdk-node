export interface DescribeApiMarketAttributesResponse {
    /**
     * API编号
     * @example `6318cd8f6a304cac9318dea8d9a78f7a`
     */
    ApiId: string;
    /**
     * 本次请求的ID。
     * @example `545D4E52-4F77-5EC4-BB7E-7344CEC7B5E6`
     */
    RequestId: string;
    /**
     * 云市场计费模式
     * @example `PREPAID_BY_USAGE`
     */
    MarketChargingMode: string;
    /**
     * 是否需要收费
     * @example `true`
     */
    NeedCharging: string;
}
