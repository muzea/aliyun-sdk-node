export interface GetDataServiceGroupResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
    /**
     * 业务流程详情。
     */
    Group: {
        /**
         * 编辑时间。
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
         * 业务流程ID。
         * @example `ds_123abc`
         */
        GroupId: string;
        /**
         * 工作空间ID。
         * @example `10002`
         */
        ProjectId: number;
        /**
         * 业务流程绑定的API网关分组ID。
         * @example `100abc`
         */
        ApiGatewayGroupId: string;
        /**
         *
         * 创建人UID，部分历史业务流程创建人的UID可能为空。
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
    };
}
