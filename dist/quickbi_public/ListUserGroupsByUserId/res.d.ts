export interface ListUserGroupsByUserIdResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `E2440604-3059-561A-AD68-DEDBC870EB2B`
     */
    RequestId: string;
    /**
     * 用户组信息。
     */
    Result: {
        /**
         * 用户组的目录层级。
         * @example `2fe4fbd8-588f-489a-b3e1-e92c7af0****​/3d2c23d4-2b41-4af8-a1f5-f6390f32****​/f5eeb52e-d9c2-4a8b-80e3-47ab55c2****`
         */
        IdentifiedPath: string;
        /**
         * 用户组ID。
         * @example `2fe4fbd8-588f-489a-b3e1-e92c7af0****`
         */
        ParentUsergroupId: string;
        /**
         * 用户组最新修改时间。
         * @example `2021-03-15 20:36:40`
         */
        ModifiedTime: string;
        /**
         * 用户组创建者。此处为Quick BI的UserID，而非阿里云的UID。
         * @example `46e5374665ba4b679ee22e2a2927****`
         */
        CreateUser: string;
        /**
         * 用户组名称。
         * @example `测试用户组`
         */
        UsergroupName: string;
        /**
         * 用户组创建时间。
         * @example `2021-03-15 17:13:55`
         */
        CreateTime: string;
        /**
         * 用户组备注。
         * @example `备注`
         */
        UsergroupDesc: string;
        /**
         * 用户组ID。
         * @example `34fd141d-4598-4093-8c33-8e066dcb****`
         */
        UsergroupId: string;
        /**
         * 用户组修改者。此处为Quick BI的UserID，而非阿里云的UID。
         * @example `46e5374665ba4b679ee22e2a2927****`
         */
        ModifyUser: string;
    }[];
}
