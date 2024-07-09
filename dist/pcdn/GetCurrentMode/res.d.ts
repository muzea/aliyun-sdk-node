export interface GetCurrentModeResponse {
    /**
     * 请求ID。
     * @example `F84A4387-33B0-4F2D-87E4-BC3465BF568E`
     */
    RequestId: string;
    /**
     * 预估月95带宽（bps），仅在ModeCode=95时返回。
     * @example `6219331`
     */
    EstimateBandwidth: number;
    /**
     * 待生效计费方式。
     * - **0**：日峰值带宽。
     * - **1**：日流量。
     * - **95**：月95峰值带宽。
     * @example `0`
     */
    PaddingModeCode: number;
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 当前计费方式。
     * - **0**：日峰值带宽。
     * - **1**：日流量。
     * - **95**：月95峰值带宽。
     * @example `0`
     */
    ModeCode: number;
    /**
     * 生效时间戳，当服务变配，且变配未生效时返回。
     * @example `1540345299`
     */
    EffectiveAt: number;
}
