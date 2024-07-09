export interface QueryOrganizationWorkspaceListResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回工作空间列表的分页结果，工作空间的详细信息列表存放在返回参数Data中。
     */
    Result: {
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 请求接口时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 工作空间列表。
         */
        Data: {
            /**
             * 创建者的阿里云账号名称。
             * @example `pop****@aliyun.com`
             */
            CreateUserAccountName: string;
            /**
             * 工作空间所有者的Quick BI用户ID。
             * @example `de4bc5f9429141cc8091cdd1c15b****`
             */
            Owner: string;
            /**
             * 工作空间创建时间。
             * @example `2020-11-10 17:51:07`
             */
            CreateTime: string;
            /**
             * 工作空间名称。
             * @example `测试空间`
             */
            WorkspaceName: string;
            /**
             * 工作空间的所属组织ID。
             * @example `2fe4fbd8-588f-489a-b3e1-e92c7af0****`
             */
            OrganizationId: string;
            /**
             * 工作空间ID。
             * @example `7350a155-0e94-4c6c-8620-57bbec38****`
             */
            WorkspaceId: string;
            /**
             * 作品是否可授权分享。取值范围：
             * - true：授权
             * - false：不授权
             * @example `true`
             */
            AllowShareOperation: boolean;
            /**
             * 创建者的Quick BI用户ID。
             * @example `de4bc5f9429141cc8091cdd1c15b****`
             */
            CreateUser: string;
            /**
             * 工作空间最新修改时间。
             * @example `2020-11-10 17:51:07`
             */
            ModifiedTime: string;
            /**
             * 工作空间备注。
             * @example `该空间是测试空间`
             */
            WorkspaceDescription: string;
            /**
             * 修改者的Quick BI用户ID。
             * @example `de4bc5f9429141cc8091cdd1c15b****`
             */
            ModifyUser: string;
            /**
             * 作品是否可公开。取值范围：
             * - true：公开
             * - false：不公开
             * @example `true`
             */
            AllowPublishOperation: boolean;
            /**
             * 工作空间所有者阿里云账号名称。
             * @example `pop****@aliyun.com`
             */
            OwnerAccountName: string;
            /**
             * 修改者的阿里云账号名。
             * @example `pop****@aliyun.com`
             */
            ModifyUserAccountName: string;
        }[];
    };
}
