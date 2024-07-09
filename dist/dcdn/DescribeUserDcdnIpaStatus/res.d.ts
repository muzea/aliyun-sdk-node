export interface DescribeUserDcdnIpaStatusResponse {
    /**
     * 是否欠费。
     * @example `false`
     */
    InDebt: boolean;
    /**
     * 服务是否可用（不欠费）。
     * @example `true`
     */
    OnService: boolean;
    /**
     * 请求ID。
     * @example `4F51E9C3-728F-4E35-952D-0ED87A06A8A1`
     */
    RequestId: string;
    /**
     * 是否欠费超期。
     * @example `false`
     */
    InDebtOverdue: boolean;
    /**
     * 是否已开通IPA服务。
     * @example `true`
     */
    Enabled: boolean;
}
