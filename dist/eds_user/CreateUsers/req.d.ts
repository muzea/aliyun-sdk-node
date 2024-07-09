export interface CreateUsersRequest {
    /**
     * 便捷账号信息。
     * @example `CreateUsers`
     */
    "Users": {
        /**
         * 用户名。自定义设置，由小写字母、数字和下划线组成，长度为3~24个字符。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 邮箱。用于接收相关邮件，如分配云电脑的通知邮件。邮箱和手机号二选一必填。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * <props="china">手机号。用于接收相关短信，如分配云电脑的通知短信。邮箱和手机号二选一必填。</props>
         * <props="intl">国际站不支持手机号。</props>
         * @example `1381111****`
         */
        Phone: string;
        /**
         * 用户密码。
         * > 密码长度不少于10位，且至少包含大写字母、小写字母、数字、特殊字符（除空格）中的任意三种。
         * @example `Wuying1234`
         */
        Password: string;
        /**
         * 账号激活类型。
         * @example `Normal`
         */
        OwnerType: string;
        /**
         * 用户所属的组织。
         * @example `design`
         */
        OrgId: string;
        /**
         * 用户备注。
         * @example `remark1`
         */
        Remark: string;
        /**
         * 用户的显示名。
         * @example `Bean`
         */
        RealNickName: string;
    }[];
    /**
     * 初始密码。如果不设置，将发送重置密码邮件到用户邮箱。
     * @example `Test123****`
     */
    "Password"?: string;
    /**
     * 自动锁定账号的日期。
     * @example `2023-03-03`
     */
    "AutoLockTime"?: string;
    /**
     * 是否将该便捷账号设为本地管理员。
     * @example `true`
     */
    "IsLocalAdmin"?: boolean;
    /**
     * 用户账号的密码默认为永久有效，可通过此参数设置30\~365天的密码有效期，当密码到期后，终端用户必须先修改密码才能继续登录。
     * > 该功能目前处于邀测中，如需体验，请提交工单申请开通。
     * @example `30`
     */
    "PasswordExpireDays"?: string;
}
