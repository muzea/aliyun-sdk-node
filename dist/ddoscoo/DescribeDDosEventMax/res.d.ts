export interface DescribeDDosEventMaxResponse {
    /**
     * Web资源耗尽型攻击峰值，单位：qps。
     * @example `26314`
     */
    Qps: number;
    /**
     * 本次请求的ID。
     * @example `5AE2FC86-C840-41AE-9F1A-3A2747C7C1DF`
     */
    RequestId: string;
    /**
     * 连接型攻击峰值，单位：cps。
     * @example `1302`
     */
    Cps: number;
    /**
     * 流量型攻击峰值，单位：Mbps。
     * @example `6809`
     */
    Mbps: number;
}
