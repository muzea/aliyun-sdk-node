export interface UpdateUserResponse {
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
         * @example `AliceLee@example.com`
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
         * @example `2021-10-26T07:32:32Z`
         */
        UpdateTime: string;
        /**
         * 用户的姓。
         * @example `Lee`
         */
        LastName: string;
    };
    /**
     * 请求ID。
     * @example `F44F02EC-70D1-5E51-8E8E-FA9AC4EF952A`
     */
    RequestId: string;
}
