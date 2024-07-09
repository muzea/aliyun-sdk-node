export interface FilterUsersResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 下一次查询的Token。如果一次查询结果并没有完整返回所有的结果，则返回的NextToken不为空。您可以在查询中上传返回的NextToken继续查询。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 便捷账号信息集合。
     */
    Users: {
        /**
         * 用户ID。
         * @example `4205**`
         */
        Id: number;
        /**
         * 用户名。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 邮箱。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 手机号。
         * @example `1381111****`
         */
        Phone: string;
        /**
         * 便捷账号的状态。
         * @example `0`
         */
        Status: number;
        /**
         * 用户属性集合。
         */
        UserSetPropertiesModels: {
            /**
             * 绑定属性的用户ID。
             * @example `4205**`
             */
            UserId: number;
            /**
             * 绑定属性的用户名。
             * @example `alice`
             */
            UserName: string;
            /**
             * 用户属性ID。
             * @example `12`
             */
            PropertyId: number;
            /**
             * 用户属性名称。
             * @example `department`
             */
            PropertyKey: string;
            /**
             * 用户属性编号。
             * @example `2`
             */
            PropertyType: number;
            /**
             * 用户属性值。
             */
            PropertyValues: {
                /**
                 * 用户属性值ID。
                 * @example `42`
                 */
                PropertyValueId: number;
                /**
                 * 用户属性值。
                 * @example `dev`
                 */
                PropertyValue: string;
            }[];
        }[];
        /**
         * 分配给该用户的云电脑数量。
         * @example `1`
         */
        DesktopCount: number;
        /**
         * 用户扩展信息。
         */
        ExternalInfo: {
            /**
             * 用户对接的账号名称。
             * @example `account`
             */
            ExternalName: string;
            /**
             * 用户对接的账号、学号或工号。
             * @example `030801`
             */
            JobNumber: string;
        };
        /**
         * 用户拥有授权的云电脑池数量。当`IncludeDesktopGroupCount`取值为`true`时，返回该值。
         * @example `2`
         */
        DesktopGroupCount: number;
        /**
         * 账号归属类型。
         * @example `Normal`
         */
        OwnerType: string;
        /**
         * 用户备注。
         * @example `测试专用`
         */
        Remark: string;
        /**
         * 是否租户管理员。
         * @example `true`
         */
        IsTenantManager: boolean;
        /**
         * 是否本地管理员。
         * @example `true`
         */
        EnableAdminAccess: boolean;
        /**
         * 用户昵称。
         * @example `小明`
         */
        RealNickName: string;
        /**
         * 自动锁定账号的日期。
         * @example `2023-03-03`
         */
        AutoLockTime: string;
        /**
         * 用户账号的密码默认为永久有效，可通过此参数设置30\~365天的密码有效期，当密码到期后，终端用户必须先修改密码才能继续登录。
         * > 该功能目前处于邀测中，如需体验，请提交工单申请开通。
         * @example `30`
         */
        PasswordExpireDays: number;
        /**
         * 账号密码有效期的剩余天数。
         * @example `10`
         */
        PasswordExpireRestDays: number;
    }[];
}
