export interface SetResellerUserStatusRequest {
    /**
     * 需要设置的用户状态
     * 取值：
     *     Freeze：用户冻结状态
     *     Thaw：用户解冻状态
     *     Trusteeship：用户托管状态
     *     TrusteeshipCancel：用户非托管状态
     * @example `Freeze`
     */
    "Status": string;
    /**
     * 业务类型
     * 取值：
     *     FREEZE：用户冻结业务
     *     TRUSTEESHIP：用户托管业务
     * @example `FREEZE`
     */
    "BusinessType": string;
    /**
     * 停机模式
     * 取值：
     *     0：普通停机
     *     1：立即停机
     * @example `0`
     */
    "StopMode"?: string;
}
