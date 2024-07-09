export interface ListDataServiceGroupsResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
    /**
     * 业务流程的分页结果。
     */
    GroupPagingResult: {
        /**
         * 页码，和请求中的PageNumber一致。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 业务流程列表。
         */
        Groups: {
            /**
             * 业务流程的编辑时间。
             * @example `2020-09-24T18:37:51+0800`
             */
            ModifiedTime: string;
            /**
             * 业务流程的描述。
             * @example `业务流程描述`
             */
            Description: string;
            /**
             * 业务流程名称。
             * @example `业务流程名称`
             */
            GroupName: string;
            /**
             * 业务流程的ID。
             * @example `ds_123abc`
             */
            GroupId: string;
            /**
             * 工作空间的ID。
             * @example `10002`
             */
            ProjectId: number;
            /**
             * 业务流程绑定的API网关分组ID。
             * @example `100abc`
             */
            ApiGatewayGroupId: string;
            /**
             * 创建人UID，部分历史业务流程的创建人UID可能为空。
             * @example `10001`
             */
            CreatorId: string;
            /**
             * 业务流程的创建时间。
             * @example `2020-09-24T18:37:51+0800`
             */
            CreatedTime: string;
            /**
             * 租户ID。
             * @example `10003`
             */
            TenantId: number;
        }[];
    };
}
