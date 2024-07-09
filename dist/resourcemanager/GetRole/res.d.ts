export interface GetRoleResponse {
    /**
     * 角色信息。
     */
    Role: {
        /**
         * 扮演角色的权限策略内容。
         * @example `{ \"Statement\": [ { \"Action\": \"sts:AssumeRole\", \"Effect\": \"Allow\", \"Principal\": { \"RAM\": \"acs:ram::12345678901234****:root\" } } ], \"Version\": \"1\" }`
         */
        AssumeRolePolicyDocument: string;
        /**
         * 被授权角色名称。
         * @example `ECSAdmin@role.123456.onaliyunservice.com`
         */
        RolePrincipalName: string;
        /**
         * 角色更新时间。
         * @example `2016-01-23T12:33:18Z`
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
         * 最近一次删除任务信息。
         */
        LatestDeletionTask: {
            /**
             * 删除任务ID。
             * @example `ECSAdmin/cc61514b-26eb-4453-ab53-b142eb702a3d`
             */
            DeletionTaskId: string;
            /**
             * 删除任务创建时间。
             * @example `2018-10-23T12:33:18Z`
             */
            CreateDate: string;
        };
        /**
         * 角色名称。
         * @example `ECSAdmin`
         */
        RoleName: string;
        /**
         * 角色创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * 角色ID。
         * @example `90123456789****`
         */
        RoleId: string;
        /**
         * 角色的资源描述符。
         * @example `acs:ram::123456789012****:role/ECSAdmin`
         */
        Arn: string;
        /**
         * 是否为服务关联角色。
         * @example `true`
         */
        IsServiceLinkedRole: boolean;
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
