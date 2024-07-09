export interface ListEntitiesForPolicyResponse {
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    Groups: {
        /**
         * 用户组信息。
         */
        Group: {
            /**
             * 组名称。
             * @example `QA-Team`
             */
            GroupName: string;
            /**
             * 备注信息。
             * @example `测试团队`
             */
            Comments: string;
            /**
             * 授权时间。
             * @example `2015-02-18T17:22:08Z`
             */
            AttachDate: string;
        }[];
    };
    Roles: {
        /**
         * 角色信息。
         */
        Role: {
            /**
             * 角色的文字描述。
             * @example `ECS管理角色`
             */
            Description: string;
            /**
             * 角色名称。
             * @example `ECSAdmin`
             */
            RoleName: string;
            /**
             * 授权时间。
             * @example `2015-01-23T12:33:18Z`
             */
            AttachDate: string;
            /**
             * 角色的资源描述符。
             * @example `acs:ram::123456789012****:role/ECSAdmin`
             */
            Arn: string;
            /**
             * 角色ID。
             * @example `122748924538****`
             */
            RoleId: string;
        }[];
    };
    Users: {
        /**
         * 用户信息。
         */
        User: {
            /**
             * 显示名称。
             * @example `张*`
             */
            DisplayName: string;
            /**
             * 用户唯一标识。
             * @example `122748924538****`
             */
            UserId: string;
            /**
             * 用户名称。
             * @example `zhangq****`
             */
            UserName: string;
            /**
             * 授权时间。
             * @example `2015-01-23T12:33:18Z`
             */
            AttachDate: string;
        }[];
    };
}
