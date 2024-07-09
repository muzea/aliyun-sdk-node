export interface QueryEmailVerificationResponse {
    /**
     * 邮箱验证状态。取值：
     * - **0**：等待验证。
     * - **1**：验证成功。
     * @example `1`
     */
    VerificationStatus: number;
    /**
     * 数据库记录的邮箱创建时间。
     * @example `2019-02-19 16:38:07`
     */
    GmtCreate: string;
    /**
     * 查询到的邮箱。
     * @example `abc@aliyun.com`
     */
    Email: string;
    /**
     * 邮箱验证编号（默认为系统自动生成的流水号）。
     * @example `72b36ba0572e423bbb3f19640896****`
     */
    EmailVerificationNo: string;
    /**
     * 完成邮箱验证的电脑IP地址。
     * @example `42.*.*.31`
     */
    ConfirmIp: string;
    /**
     * 唯一请求识别码。
     * @example `FC4F7D02-8A83-4E37-B935-2D48A1B8423E`
     */
    RequestId: string;
    /**
     * 用户ID。
     * @example `140692647406****`
     */
    UserId: string;
    /**
     * 数据库记录的邮箱更新时间。
     * @example `2019-02-19 16:40:38`
     */
    GmtModified: string;
    /**
     * 用户发起邮件验证的IP地址。
     * @example `42.*.*.115`
     */
    SendIp: string;
    /**
     * 完成邮箱验证的具体时间。
     * @example `2019-02-19 16:40:38`
     */
    VerificationTime: string;
    /**
     * 邮箱验证Token的发送时间。
     * @example `2019-02-19 16:38:07`
     */
    TokenSendTime: string;
}
