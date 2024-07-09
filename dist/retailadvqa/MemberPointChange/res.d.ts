export interface MemberPointChangeResponse {
    /**
     * 请求id
     * @example `B2CD5682-12C0-51A7-82FC-1D36091CADAD`
     */
    RequestId: string;
    /**
     * 是否成功：
     * true：成功
     * false：失败
     * @example `true`
     */
    Success: string;
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
     * 账户余额。
     * @example `100`
     */
    AccountBalance: string;
    /**
     * 会员等级
     * @example `12`
     */
    LevelName: string;
}
