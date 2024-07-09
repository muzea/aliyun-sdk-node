export interface GetUserResponse {
    /**
     * 用户信息。
     */
    User: {
        /**
         * 用户的状态。取值：
         * - Enabled：启用。
         * - Disabled：禁用。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 用户名称。
         * @example `Alice`
         */
        UserName: string;
        /**
         * 用户的电子邮箱。
         * @example `Alice@example.com`
         */
        Email: string;
        /**
         * 用户的描述。
         * @example `This is a user.`
         */
        Description: string;
        /**
         * 用户ID。
         * @example `u-00q8wbq42wiltcrk****`
         */
        UserId: string;
        /**
         * 用户的名。
         * @example `Alice`
         */
        FirstName: string;
        /**
         * 用户的创建时间（UTC时间）。
         * @example `2021-10-26T03:03:42Z`
         */
        CreateTime: string;
        /**
         * 用户的类型。取值：
         * - Manual：手动创建。
         * - Synchronized：外部同步。
         * @example `Manual`
         */
        ProvisionType: string;
        /**
         * 用户的显示名称。
         * @example `Alice`
         */
        DisplayName: string;
        /**
         * 用户的修改时间（UTC时间）。
         * @example `2021-10-26T06:43:55Z`
         */
        UpdateTime: string;
        /**
         * 用户的姓。
         * @example `Lee`
         */
        LastName: string;
        /**
         * 外部身份提供商的用户标识符信息。
         */
        ExternalId: {
            /**
             * 外部身份提供商的用户标识符。
             * @example `c73******a5fdd5`
             */
            Id: string;
            /**
             * 外部身份同步渠道，当前仅支持SCIM同步。
             * @example `SCIM`
             */
            Issuer: string;
        };
    };
    /**
     * 请求ID。
     * @example `EE42D2C4-A30A-59B7-ACEB-6D22FB44174A`
     */
    RequestId: string;
}
