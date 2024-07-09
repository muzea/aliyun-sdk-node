export interface GetAccountSummaryResponse {
    /**
     * 请求ID。
     * @example `81313F5E-3C85-478F-BCC9-E1B70E4556DB`
     */
    RequestId: string;
    /**
     * 阿里云账号概览信息。
     */
    SummaryMap: {
        /**
         * 虚拟多因素认证设备的数量。
         * @example `13`
         */
        MFADevices: number;
        /**
         * 每个RAM用户允许拥有访问密钥的最大数量。
         * @example `2`
         */
        AccessKeysPerUserQuota: number;
        /**
         * 每个用户组允许添加自定义策略的最大数量。
         * @example `5`
         */
        AttachedPoliciesPerGroupQuota: number;
        /**
         * 每个RAM角色允许添加系统策略的最大数量。
         * @example `20`
         */
        AttachedSystemPoliciesPerRoleQuota: number;
        /**
         * 每个RAM角色允许添加自定义策略的最大数量。
         * @example `5`
         */
        AttachedPoliciesPerRoleQuota: number;
        /**
         * 每个RAM用户允许加入的用户组最大数量。
         * @example `5`
         */
        GroupsPerUserQuota: number;
        /**
         * RAM角色数量。
         * @example `19`
         */
        Roles: number;
        /**
         * 权限策略内容的最大长度。
         * @example `2048`
         */
        PolicySizeQuota: number;
        /**
         * 每个用户组允许添加系统策略的最大数量。
         * @example `20`
         */
        AttachedSystemPoliciesPerGroupQuota: number;
        /**
         * 每个RAM用户允许添加系统策略的最大数量。
         * @example `20`
         */
        AttachedSystemPoliciesPerUserQuota: number;
        /**
         * 每个RAM用户允许添加自定义策略的最大数量。
         * @example `10`
         */
        AttachedPoliciesPerUserQuota: number;
        /**
         * 允许创建用户组的最大数量。
         * @example `50`
         */
        GroupsQuota: number;
        /**
         * 用户组数量。
         * @example `7`
         */
        Groups: number;
        /**
         * 允许创建自定义策略的最大数量。
         * @example `1500`
         */
        PoliciesQuota: number;
        /**
         * 允许创建虚拟多因素认证设备的最大数量。
         * @example `1000`
         */
        VirtualMFADevicesQuota: number;
        /**
         * 权限策略版本的最大数量。
         * @example `5`
         */
        VersionsPerPolicyQuota: number;
        /**
         * 允许创建RAM角色的最大数量。
         * @example `1000`
         */
        RolesQuota: number;
        /**
         * 允许创建RAM用户的最大数量。
         * @example `1000`
         */
        UsersQuota: number;
        /**
         * 自定义策略数量。
         * @example `13`
         */
        Policies: number;
        /**
         * RAM用户数量。
         * @example `9`
         */
        Users: number;
        /**
         * 使用中的虚拟多因素认证设备的数量。
         * @example `2`
         */
        MFADevicesInUse: number;
    };
}
