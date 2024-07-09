export interface DescribePortAttackMaxFlowResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 攻击带宽峰值。单位：bps。
     * @example `149559`
     */
    Bps: number;
    /**
     * 攻击包速峰值。单位：pps。
     * @example `23`
     */
    Pps: number;
}
