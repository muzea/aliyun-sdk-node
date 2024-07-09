export interface SyncMemberBehaviorInfoResponse {
    /**
     * 请求id
     * @example `1DEFC4F1-AF11-5A3C-93B9-2880768DA218
    `
     */
    RequestId: string;
    /**
     * 是否成功：
     * true：成功
     * false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `Lydaas.QuickMember.SystemError
    `
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `系统错误: openMerchantId 不能为空`
     */
    ErrorMessage: string;
}
