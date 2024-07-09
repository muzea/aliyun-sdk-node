export interface CheckProductOpenResponse {
    /**
     * 请求ID。
     * @example `8D8992C1-6712-423C-BAC5-E5E817484C6B`
     */
    RequestId: string;
    /**
     * 私网连接服务开通状态。
     * 仅取值：**true**，表示开通。
     * @example `true`
     */
    Success: boolean;
}
