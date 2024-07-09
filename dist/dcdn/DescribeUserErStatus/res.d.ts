export interface DescribeUserErStatusResponse {
    /**
     * 边缘函数ER是否欠费。
     * - true：欠费。
     * - false：未欠费。
     * @example `false`
     */
    InDebt: boolean;
    /**
     * 边缘函数ER是否可用。
     * - true：可用。
     * - false：不可用。
     * @example `true`
     */
    OnService: boolean;
    /**
     * 请求ID。
     * @example `4F51E9C3-728F-4E35-952D-0ED87A06A8A1`
     */
    RequestId: string;
    /**
     * 边缘函数ER是否欠费超时。
     * - true：超时。
     * - false：未超时。
     * @example `false`
     */
    InDebtOverdue: boolean;
    /**
     * 是否开通边缘函数ER。
     * - true：开通。
     * - false：未开通。
     * @example `true`
     */
    Enabled: boolean;
}
