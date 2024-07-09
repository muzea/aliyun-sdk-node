export interface DescribeAttackAnalysisMaxQpsResponse {
    /**
     * DDoS攻击的峰值，单位：qps。
     * @example `41652`
     */
    Qps: number;
    /**
     * 本次请求的ID。
     * @example `8DFB602D-1AAC-46C4-90F2-C84086E7A6E4`
     */
    RequestId: string;
}
