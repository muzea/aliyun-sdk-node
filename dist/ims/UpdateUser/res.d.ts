export interface UpdateUserResponse {
    /**
     * RAM用户信息。
     */
    User: {
        /**
         * RAM用户的显示名称。
         * @example `new`
         */
        DisplayName: string;
        /**
         * RAM用户的登录名称。
         * @example `new@example.onaliyun.com`
         */
        UserPrincipalName: string;
        /**
         * RAM用户的电子邮箱。
         * > 该参数仅适用于中国站。
         * @example `alice@example.com`
         */
        Email: string;
        /**
         * RAM用户的更新时间。
         * @example `2020-10-13T09:19:49Z`
         */
        UpdateDate: string;
        /**
         * RAM用户的手机号码。
         * > 该参数仅适用于中国站。
         * @example `86-1868888****`
         */
        MobilePhone: string;
        /**
         * RAM用户ID。
         * @example `20732900249392****`
         */
        UserId: string;
        /**
         * 备注。
         * @example `This is a cloud computing engineer.`
         */
        Comments: string;
        /**
         * RAM用户最近一次登录控制台的时间。
         * @example `2020-10-12T09:12:00Z`
         */
        LastLoginDate: string;
        /**
         * RAM用户的创建时间。
         * @example `2020-10-12T09:12:00Z`
         */
        CreateDate: string;
        /**
         * 同步类型。取值：
         * - Manual：在RAM中手动创建的RAM用户。
         * - SCIM：通过SCIM协议同步创建的RAM用户。
         * - CloudSSO：通过云SSO同步创建的用户。
         * @example `Manual`
         */
        ProvisionType: string;
    };
    /**
     * 请求ID。
     * @example `1B56DD42-6962-4F89-A19C-079EED1F0FE3`
     */
    RequestId: string;
}
