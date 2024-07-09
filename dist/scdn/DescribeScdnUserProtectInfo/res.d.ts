export interface DescribeScdnUserProtectInfoResponse {
    /**
     * 是否开启网络攻击防护。取值：
     * - **0**：未开启。
     * - **1**：开启。
     * @example `1`
     */
    ServiceDDoS: number;
    /**
     * 请求ID。
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
}
