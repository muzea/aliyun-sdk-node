export interface ListPolicyAttachmentsResponse {
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    PolicyAttachments: {
        /**
         * 权限策略信息。
         */
        PolicyAttachment: {
            /**
             * 权限策略描述。
             * @example `管理员权限`
             */
            Description: string;
            /**
             * 资源组ID或资源组所属的阿里云账号ID。
             * @example `rg-9gLOoK****`
             */
            ResourceGroupId: string;
            /**
             * 权限策略名称。
             * @example `AdministratorAccess`
             */
            PolicyName: string;
            /**
             * 被授权对象名称。
             * @example `alice@demo.onaliyun.com`
             */
            PrincipalName: string;
            /**
             * 授权时间。
             * @example `2015-01-23T12:33:18Z`
             */
            AttachDate: string;
            /**
             * 权限策略类型。
             * - Custom：自定义策略。
             * - System：系统策略。
             * @example `System`
             */
            PolicyType: string;
            /**
             * 被授权对象类型。
             * - IMSUser：RAM用户。
             * - IMSGroup：RAM用户组。
             * - ServiceRole：RAM角色。
             * @example `IMSUser`
             */
            PrincipalType: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
}
