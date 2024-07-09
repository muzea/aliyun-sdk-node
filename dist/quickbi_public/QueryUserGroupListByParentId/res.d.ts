export interface QueryUserGroupListByParentIdResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `72B19D61-B37A-5C7A-9389-0856CD7935B3`
     */
    RequestId: string;
    /**
     * 子用户组信息。
     */
    Result: {
        /**
         * 子用户组的目录层级。
         * @example `2fe4fbd8-588f-489a-b3e1-e92c7af0****​/3d2c23d4-2b41-4af8-a1f5-f6390f32****​/f5eeb52e-d9c2-4a8b-80e3-47ab55c2****`
         */
        IdentifiedPath: string;
        /**
         * 子用户组最新修改时间。
         * @example `2020-11-16 15:49:08`
         */
        ModifiedTime: string;
        /**
         * 子用户组创建者。此处为Quick BI的UserID，而非阿里云的UID。
         * @example `136516262323****`
         */
        CreateUser: string;
        /**
         * 子用户组创建时间。
         * @example `2020-10-30 10:03:09`
         */
        CreateTime: string;
        /**
         * 子用户组ID。
         * @example `f5eeb52e-d9c2-4a8b-80e3-47ab55c2****`
         */
        UserGroupId: string;
        /**
         * 子用户组名称。
         * @example `popapi测试分组`
         */
        UserGroupName: string;
        /**
         * 子用户组修改者。此处为Quick BI的UserID，而非阿里云的UID。
         * @example `136516262323****`
         */
        ModifyUser: string;
        /**
         * 父用户组ID。
         * @example `3d2c23d4-2b41-4af8-a1f5-f6390f32****`
         */
        ParentUserGroupId: string;
        /**
         * 子用户组备注。
         * @example `用来测试的用户组`
         */
        UserGroupDescription: string;
    }[];
}
