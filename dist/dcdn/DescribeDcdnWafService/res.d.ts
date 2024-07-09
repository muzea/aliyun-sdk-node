export interface DescribeDcdnWafServiceResponse {
    /**
     * 业务状态，取值：
     * - Normal：正常
     * - WaitForExpire：等待停机
     * - Expired：已过期
     * - Released：释放
     * @example `Normal`
     */
    Status: string;
    /**
     * 请求数计费方式。
     * @example `dcdn_waf_req`
     */
    RequestBillingType: string;
    /**
     * WAF版本信息。
     * @example `dcdnwaf_afterpay`
     */
    Edition: string;
    /**
     * 请求ID。
     * @example `4A95CA90-E0F2-1BF6-99E0-8C1510CAF649`
     */
    RequestId: string;
    /**
     * 服务开通时间。
     * @example `2021-09-26T16:00:00Z`
     */
    OpeningTime: string;
    /**
     * 服务开通状态。
     * - on：开通
     * - off：未开通
     * @example `on`
     */
    Enabled: string;
    /**
     * 规则数计费方式，按SeCU数量计费。
     * @example `dcdn_waf_rule`
     */
    RuleBillingType: string;
}
