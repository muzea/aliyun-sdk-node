export interface CalculateMemberLevelResponse {
    /**
     * 请求ID
     * @example `1DEFC4F1-AF11-5A3C-93B9-2880768DA218
    `
     */
    RequestId: string;
    /**
     * 查询是否成功：
     * true：成功。
     * false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 错误码
     * @example `Lydaas.QuickMember.SystemError
    `
     */
    ErrorCode: string;
    /**
     * 错误信息，请求异常时返回。
     * @example `系统错误: openMerchantId 不能为空
    `
     */
    ErrorMessage: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 会员等级
     * @example `1`
     */
    Grade: string;
    /**
     * 外部会员id
     * @example `6062f9067f170700a2e7ef5a`
     */
    OuterMemberId: string;
}
