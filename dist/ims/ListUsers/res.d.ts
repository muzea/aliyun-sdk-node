export interface ListUsersResponse {
    /**
     * 请求ID。
     * @example `4B450CA1-36E8-4AA2-8461-86B42BF4CC4E`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。取值：
     * - true
     * - false
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 此参数在`IsTruncated`为`true`时生效，用于获取截断后的内容。
     * @example `EXAMPLE`
     */
    Marker: string;
    Users: {
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
             * RAM用户的更新时间（UTC时间）。
             * @example `2023-08-21T06:12:47Z`
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
             * RAM用户最近一次登录控制台的时间（时间戳）。
             * @example `1692598367586`
             */
            LastLoginDate: string;
            /**
             * RAM用户的创建时间（UTC时间）。
             * @example `2020-08-25T09:23:57Z`
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
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `oparator`
                     */
                    TagKey: string;
                    /**
                     * 标签值。
                     * @example `alice`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
