export interface GetRoleResponse {
    /**
     * 角色信息。
     */
    Role: {
        /**
         * 扮演角色的权限策略。
         * @example `{ "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }`
         */
        AssumeRolePolicyDocument: string;
        /**
         * 更新时间。
         * @example `2015-01-23T12:33:18Z`
         */
        UpdateDate: string;
        /**
         * 角色描述。
         * @example `ECS管理角色`
         */
        Description: string;
        /**
         * 角色最大会话时间。
         * @example `3600`
         */
        MaxSessionDuration: number;
        /**
         * 角色名称。
         * @example `ECSAdmin`
         */
        RoleName: string;
        /**
         * 创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * 角色ID。
         * @example `901234567890****`
         */
        RoleId: string;
        /**
         * 角色的资源描述符。
         * @example `acs:ram::123456789012****:role/ECSAdmin`
         */
        Arn: string;
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
