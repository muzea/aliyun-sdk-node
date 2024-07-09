export interface DescribeScdnServiceResponse {
    /**
     * 将要生效的接入域名数（不带单位）
     * @example `20`
     */
    DomainCountValue: string;
    /**
     * 将要生效的网络攻击保底防护（不带单位）
     * @example `20`
     */
    DDoSBasicValue: string;
    /**
     * GMT时间，下次变配生效时间
     * @example `2018-03-31T16:00:00Z`
     */
    ChangingAffectTime: string;
    /**
     * 将要生效的频次攻击防护（带单位）
     * @example `60000Qps`
     */
    CcProtection: string;
    /**
     * 当前的接入域名数（带单位）
     * @example `20`
     */
    CurrentDomainCount: string;
    /**
     * 付费周期。取值：**Month**，**Year**等。
     * @example `Year`
     */
    PricingCycle: string;
    /**
     * 开通服务时间，ISO 8601时间格式
     * @example `2017-11-07T16:00:00Z`
     */
    OpenTime: string;
    /**
     * 下次生效的计费类型。
     * - PayByTraffic：流量。
     * - PayByBandwidth：带宽。
     * - PayByBandwidth95：月95。
     * - PayByBandwidth_monthavg：月平均带宽。
     * - PayByBandwidth_month4th：月第四峰值。
     * - PayByBandwidth_monthday95avg：月平均95。
     * - PayByBandwidth_nighthalf95：月95夜间减半。
     * @example `PayByBandwidth`
     */
    ChangingChargeType: string;
    /**
     * 请求ID
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
    /**
     * 当前的CDN保底带宽（不带单位）
     * @example `3`
     */
    CurrentBandwidthValue: string;
    /**
     * 将要生效的CDN保底带宽（带单位）
     * @example `100Mbps`
     */
    Bandwidth: string;
    /**
     * 将要生效的接入域名数（带单位）
     * @example `20个`
     */
    DomainCount: string;
    /**
     * 将要生效的资费版本英文，如base。为空时是标准版本。
     * @example `standard`
     */
    ProtectTypeValue: string;
    /**
     * 当前的CDN保底带宽（带单位）
     * @example `3 M`
     */
    CurrentBandwidth: string;
    /**
     * 付费方式
     * @example `monthPrice`
     */
    PriceType: string;
    /**
     * 将要生效的频次攻击防护（不带单位）
     * @example `60000`
     */
    CcProtectionValue: string;
    /**
     * 当前的网络攻击保底防护（带单位）
     * @example `30Gbps`
     */
    CurrentDDoSBasic: string;
    /**
     * 将要生效的资费版本，如基础防护。为空时是标准版本。
     * @example `标准防护`
     */
    ProtectType: string;
    /**
     * 当前的网络攻击弹性防护（带单位）
     * @example `100Gbps`
     */
    CurrentElasticProtection: string;
    /**
     * 当前的网络攻击弹性防护（不带单位）
     * @example `100`
     */
    CurrentElasticProtectionValue: string;
    /**
     * 实例ID
     * @example `example ID`
     */
    InstanceId: string;
    /**
     * 当前的资费版本，如基础防护。为空时是标准版本。
     * @example `标准防护`
     */
    CurrentProtectType: string;
    /**
     * 将要生效的网络攻击弹性防护（带单位）
     * @example `100Gbps`
     */
    ElasticProtection: string;
    /**
     * 服务到期时间，ISO 8601时间格式
     * @example `2014-12-08T00:00:00Z`
     */
    EndTime: string;
    /**
     * 当前的网络攻击保底防护（不带单位）
     * @example `30`
     */
    CurrentDDoSBasicValue: string;
    /**
     * 将要生效的CDN保底带宽（不带单位）
     * @example `100`
     */
    BandwidthValue: string;
    /**
     * 将要生效的网络攻击保底防护（带单位）
     * @example `20Gbps`
     */
    DDoSBasic: string;
    /**
     * 当前的接入域名数（不带单位）
     * @example `20`
     */
    CurrentDomainCountValue: string;
    /**
     * 将要生效的网络攻击弹性防护（不带单位）
     * @example `100`
     */
    ElasticProtectionValue: string;
    /**
     * 当前的频次攻击防护（带单位）
     * @example `60,000 QPS`
     */
    CurrentCcProtection: string;
    /**
     * 当前计费类型。
     * - PayByTraffic：流量。
     * - PayByBandwidth：带宽。
     * - PayByBandwidth95：月95。
     * - PayByBandwidth_monthavg：月平均带宽。
     * - PayByBandwidth_month4th：月第四峰值。
     * - PayByBandwidth_monthday95avg：月平均95。
     * - PayByBandwidth_nighthalf95：月95夜间减半。
     * @example `PayByTraffic`
     */
    InternetChargeType: string;
    /**
     * 当前的资费版本英文，如base。为空时是标准版本。
     * @example `standard`
     */
    CurrentProtectTypeValue: string;
    /**
     * 当前的频次攻击防护（不带单位）
     * @example `60000`
     */
    CurrentCcProtectionValue: string;
    OperationLocks: {
        /**
         * 业务锁定状态。
         */
        LockReason: {
            /**
             * 锁定原因。例如：financial（欠费）。
             * @example `financial`
             */
            LockReason: string;
        }[];
    };
}
