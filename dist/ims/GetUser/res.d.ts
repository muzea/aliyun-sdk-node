export interface GetUserResponse {
    /**
     * RAM用户信息。
     */
    User: {
        /**
         * RAM用户的显示名称。
         * @example `test`
         */
        DisplayName: string;
        /**
         * RAM用户的登录名称。
         * @example `test@example.onaliyun.com`
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
         * @example `2020-10-13T07:39:22Z`
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
         * @example `CloudSSO`
         */
        ProvisionType: string;
        Tags: {
            /**
             * 标签列表。
             */
            Tag: {
                /**
                 * 标签键。
                 * @example `operator`
                 */
                TagKey: string;
                /**
                 * 标签值。
                 * @example `alice`
                 */
                TagValue: string;
            }[];
        };
    };
    /**
     * 请求ID。
     * @example `4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B`
     */
    RequestId: string;
}
