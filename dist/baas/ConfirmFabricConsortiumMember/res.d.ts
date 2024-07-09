export interface ConfirmFabricConsortiumMemberResponse {
    /**
     * 请求ID
     * @example `50B3ACF3-CE12-433C-A834-9E8C657A4934`
     */
    RequestId: string;
    /**
     * 结果
     * @example `true`
     */
    Result: boolean;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
}
