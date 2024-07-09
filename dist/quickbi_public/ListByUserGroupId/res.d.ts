export interface ListByUserGroupIdResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 返回用户组查询结果。
     */
    Result: {
        /**
         * 查询到的用户组详情。
         */
        UserGroupModels: {
            /**
             * 用户组路径。
             * @example `2fe4fbd8-****-af083ea/34fd1-****-dcbc33f`
             */
            IdentifiedPath: string;
            /**
             * 上级用户组的ID。
             * @example `2fe4fbd8-588f-489a-b3e1-e92c7af083ea`
             */
            ParentUsergroupId: string;
            /**
             * 修改时间。
             * @example `2021-03-15 20:36:40`
             */
            ModifiedTime: string;
            /**
             * 创建者在Quick BI的UserID。
             * @example `46e5*******ee22e2a292704c8`
             */
            CreateUser: string;
            /**
             * 用户组名称。
             * @example `测试用户组`
             */
            UsergroupName: string;
            /**
             * 创建时间。
             * @example `2021-03-15 17:13:55`
             */
            CreateTime: string;
            /**
             * 用户组描述信息。
             * @example `描述信息`
             */
            UsergroupDesc: string;
            /**
             * 用户组ID。
             * @example `34fd141d-****-4093-8c33-8e066dcbc33f`
             */
            UsergroupId: string;
            /**
             * 修改者在Quick BI的UserID。
             * @example `46e5*******ee22e2a292704c8`
             */
            ModifyUser: string;
        }[];
        FailedUserGroupIds: string[];
    };
}
