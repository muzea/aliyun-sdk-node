export interface DsgUserGroupAddOrUpdateRequest {
    /**
     * 用户组信息。
     */
    "UserGroups": {
        /**
         * 用户组ID。
         * - 不配置该参数：表示当前操作为新增用户组。
         * - 配置该参数：表示编辑指定用户组信息。您可调用[DsgUserGroupQueryList](~~2786441~~)接口查询用户组ID。
         * @example `123`
         */
        Id: number;
        /**
         * 用户组名称。
         * @example `yun_group`
         */
        Name: string;
        /**
         * 用户组的负责人。
         * @example `user1`
         */
        Owner: string;
        /**
         * 用户组中的用户列表。
         * - 基于阿里云账号及RAM角色创建的用户组：可调用[DsgUserGroupQueryUserList](~~2786445~~)接口查询用户列表。
         * - 基于MaxCompute角色创建的用户组：可调用[DsgUserGroupGetOdpsRoleGroups](~~2785695~~)接口查询用户列表。
         */
        Accounts: string[];
        /**
         * MaxCompute项目名称。创建MaxCompute用户组时必须配置该参数。
         * @example `dev_project`
         */
        ProjectName: string;
        /**
         * 用户组类型。取值如下：
         * - 1：阿里云用户
         * - 2：RAM角色
         * - 3：MaxCompute角色
         * @example `1`
         */
        UserGroupType: number;
    }[];
}
