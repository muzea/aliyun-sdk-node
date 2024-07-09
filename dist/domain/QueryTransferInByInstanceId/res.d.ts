export interface QueryTransferInByInstanceIdResponse {
    /**
     * 详细域名转入状态。取值：
     * - **10**：初始状态；
     * - **11**：已发送邮件验证token链接；
     * - **19**：token链接已验证成功；
     * - **20**：已提交命名审核；
     * - **21**：命名审核失败；
     * - **29**：命名审核成功；
     * - **31**：转移密码错误；
     * - **39**：转入提交成功；
     * - **50**：客户取消转入；
     * - **51**：转入失败；
     * - **52**：转入过期；
     * - **59**：转入成功。
     * @example `11`
     */
    Status: number;
    /**
     * 转移密码提交成功时间。
     * @example `2018-03-28 00:41:42`
     */
    TransferAuthorizationCodeSubmissionDate: string;
    /**
     * 域名转入确认邮件发送邮箱。
     * @example `username@example.com`
     */
    Email: string;
    /**
     * 转移过程进度条类型。取值：
     * - **0**：同时需要邮箱验证和命名审核；
     * - **1**：需要邮箱验证不需要命名审核；
     * - **2**：需要命名审核不需要邮箱验证；
     * - **3**：不需要邮箱验证不需要命名审核。
     * @example `0`
     */
    ProgressBarType: number;
    /**
     * 唯一请求识别码。
     * @example `AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60`
     */
    RequestId: string;
    /**
     * 实例编号。
     * @example `S20181T0WLI85212`
     */
    InstanceId: string;
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 转移请求提交时间戳。
     * @example `1514428524669`
     */
    SubmissionDateLong: number;
    /**
     * 转移请求提交时间。
     * @example `2018-03-28 00:41:42`
     */
    SubmissionDate: string;
    /**
     * 转移状态。取值：
     * - **INIT**：提交转入；
     * - **AUTHORIZATION**：授权转入（邮箱验证）；
     * - **NAME_VERIFICATION**：命名审核；
     * - **PASSWORD_VERIFICATION**：转移密码验证；
     * - **PENDING**：转入处理中；
     * - **SUCCESS**：转入成功；
     * - **FAIL**：转入失败。
     * @example `SUCCESS`
     */
    SimpleTransferInStatus: string;
    /**
     * 转移密码提交成功时间戳。
     * @example `1514428524669`
     */
    TransferAuthorizationCodeSubmissionDateLong: number;
    /**
     * 转入过期时间戳。
     * @example `1514428524669`
     */
    ExpirationDateLong: number;
    /**
     * 域名转入过期时间。
     * @example `2018-03-28 00:41:42`
     */
    ExpirationDate: string;
    /**
     * 是否需要邮件验证。
     * @example `true`
     */
    NeedMailCheck: boolean;
    /**
     * 用户编号。
     * @example `123456`
     */
    UserId: string;
    /**
     * 转入信息更新时间。
     * @example `2018-03-28 00:41:42`
     */
    ModificationDate: string;
    /**
     * 转移成功或失败的时间戳。
     * @example `1514428524669`
     */
    ResultDateLong: number;
    /**
     * 转移失败时失败原因描述。
     * @example `您取消了此次域名转入`
     */
    ResultMsg: string;
    /**
     * 是否通过whois抓取到域名持有者邮箱。当域名转入处于授权转入（邮箱验证）并且该字段为**false**时，表示未通过whois抓取到域名持有者邮箱，需要等待人工处理。
     * @example `true`
     */
    WhoisMailStatus: boolean;
    /**
     * 转入信息更新时间戳。
     * @example `1514428524669`
     */
    ModificationDateLong: number;
    /**
     * 转移失败时失败原因code。取值：
     * - **clientCancelled**：您取消了此次域名转入；
     * - **clientRejected**：域名原注册商拒绝了本次域名转入（或您通过原注册商进行了拒绝操作）；
     * - **serverCancelled**：注册局取消转入；
     * - **transferProhibited**：域名为禁止转移状态；
     * - **transferExpired**：您未在有效期内完成相关转入确认；
     * - **nameVerificationFailed**：域名命名审核未通过；
     * - **transferSubmitted**：其他用户已经提交域名转入。
     * @example `clientCancelled`
     */
    ResultCode: string;
    /**
     * 转移成功或失败的时间。
     * @example `2018-03-28 00:41:42`
     */
    ResultDate: string;
}
