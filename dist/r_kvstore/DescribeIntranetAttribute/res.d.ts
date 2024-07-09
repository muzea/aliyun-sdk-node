export interface DescribeIntranetAttributeResponse {
    /**
     * 购买的带宽是否开启了自动续订，取值：
     * * **true**：已开启。
     * * **false**：未开启。
     * > 如果未购买带宽，则不返回本参数。
     * @example `true`
     */
    AutoRenewal: boolean;
    /**
     * 请求ID。
     * @example `25D42CC3-FBA1-4AEC-BCE2-B8DD3137****`
     */
    RequestId: string;
    /**
     * 临时带宽的过期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z。
     * > 如果实例未执行过临时调整带宽或临时带宽已过期，本参数返回**0**。
     * @example `0`
     */
    ExpireTime: string;
    /**
     * 实例当前的内网带宽，本参数为实例中所有分片的带宽总和，单位MB/s。
     * @example `102`
     */
    IntranetBandwidth: number;
    /**
     * 实例是否有未到期的带宽包，取值：
     * * **true**：存在未到期的带宽包。
     * * **false**：不存在未到期的带宽包。
     * > 如果实例未购买额外的带宽，则不返回本参数。
     * @example `true`
     */
    HasPrePaidBandWidthOrderRunning: boolean;
    /**
     * 购买带宽的过期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z。
     * > 如果实例未购买额外的带宽，则不返回本参数。
     * @example `2021-03-06T16:00:00Z`
     */
    BandwidthExpireTime: string;
    /**
     * 带宽包付费类型，取值：
     * - **0**：按量付费。
     * - **1**：预付费。
     * @example `0`
     */
    BandwidthPrePaid: string;
}
