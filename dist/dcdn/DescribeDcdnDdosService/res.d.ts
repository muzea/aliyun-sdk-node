export interface DescribeDcdnDdosServiceResponse {
    /**
     * 业务状态，取值：
     * - **Normal**：正常
     * - **WaitForExpire**：等待停机
     * - **Expired**：已过期
     * - **Released**：释放
     * @example `Normal`
     */
    Status: string;
    /**
     * 下次生效时间，GMT时间。
     * @example `2018-03-31T16:00:00Z`
     */
    ChangingAffectTime: string;
    /**
     * 服务开通时间。
     * @example `2021-09-26T16:00:00Z`
     */
    OpeningTime: string;
    /**
     * 将变配生效的防护版本。取值范围：
     * - **poc**：POC版。
     * - **basic**：基础版。
     * - **insurance**：保险版。
     * - **unlimited**：无忧版。
     * @example `basic`
     */
    ChangingEdition: string;
    /**
     * 付费方式。取值范围：
     * - **PayByBandwidth**：按日峰值带宽计费。
     * - **PayByTraffic**：按使用流量计费。
     * - **PayByBandwidth95**：按95带宽计费。
     * @example `PayByTraffic`
     */
    ChargeType: string;
    /**
     * 防护域名数。
     * @example `20`
     */
    DomianNum: number;
    /**
     * 变配防护次数。
     * @example `100`
     */
    ChangingProtectNum: number;
    /**
     * 变配防护域名数。
     * @example `30`
     */
    ChangingDomianNum: number;
    /**
     * 实例ID。
     * @example `xxx-12345`
     */
    InstanceId: string;
    /**
     * 防护版本。取值范围：
     * - **poc**：POC版。
     * - **basic**：基础版。
     * - **insurance**：保险版。
     * - **unlimited**：无忧版。
     * @example `poc`
     */
    Edition: string;
    /**
     * 变配后付费方式。取值范围：
     * - **PayByBandwidth**：按日峰值带宽计费。
     * - **PayByTraffic**：按使用流量计费。
     * - **PayByBandwidth95**：按95带宽计费。
     * @example `PayByBandwidth`
     */
    ChangingChargeType: string;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    /**
     * 防护次数。
     * @example `100`
     */
    ProtectNum: number;
    /**
     * 服务开通状态。取值范围：
     * - **on**：开通
     * - **off**：未开通
     * @example `on`
     */
    Enabled: string;
    /**
     * 服务到期时间。
     * @example `2023-09-26T16:00:00Z`
     */
    EndingTime: string;
}
