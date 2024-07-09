export interface ListEmailVerificationResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 唯一请求识别码。
     * @example `78C60CC3-FF0A-44E2-989A-DDE0597791C3`
     */
    RequestId: string;
    /**
     * 分页的大小。
     * @example `500`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 邮箱验证列表。
     */
    Data: {
        /**
         * 完成邮箱验证的具体时间。
         * @example `2017-12-25 03:41:11`
         */
        VerificationTime: string;
        /**
         * 进行验证的邮箱地址。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 邮箱验证编号（默认为系统自动生成的流水号）。
         * @example `00000a21fd374da99d9c95b48500000`
         */
        EmailVerificationNo: string;
        /**
         * 用户ID。
         * @example `0000`
         */
        UserId: string;
        /**
         * 数据库记录的创建时间。
         * @example `2017-12-25 03:38:46`
         */
        GmtCreate: string;
        /**
         * 邮箱验证状态，取值：
         * - **0**：等待验证。
         * - **1**：验证成功。
         * @example `1`
         */
        VerificationStatus: number;
        /**
         * 邮箱验证Token的发送时间。
         * @example `2017-12-25 03:38:46`
         */
        TokenSendTime: string;
        /**
         * 用户发起邮件验证的IP地址。
         * @example `127.0.0.1`
         */
        SendIp: string;
        /**
         * 数据库记录的更新时间。
         * @example `2017-12-25 03:41:11`
         */
        GmtModified: string;
        /**
         * 完成邮箱验证的电脑IP地址。
         * @example `127.0.0.1`
         */
        ConfirmIp: string;
    }[];
    /**
     * 域名总记录数。
     * @example `2`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    NextPage: boolean;
}
