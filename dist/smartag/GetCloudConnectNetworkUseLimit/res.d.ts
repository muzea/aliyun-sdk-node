export interface GetCloudConnectNetworkUseLimitResponse {
    /**
     * 已创建的云连接网个数。
     * @example `6`
     */
    UsedAmount: number;
    /**
     * 请求ID。
     * @example `BCD04867-56C3-43DC-8FEF-923EFB8B56DA`
     */
    RequestId: string;
    /**
     * 当前账号在指定的区域最多可创建的云连接网个数。
     * @example `10`
     */
    TotalAmount: number;
}
