export interface DescribeDBResourceGroupResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 资源组信息列表。
     */
    GroupsInfo: {
        /**
         * 查询类型。取值说明：
         * - **interactive**：交互查询模式。
         * - **batch**：默认查询模式。
         * > 详情请参见[查询执行模式](~~189502~~)。
         * @example `interactive`
         */
        GroupType: string;
        /**
         * 更新时间。
         * @example `2022-11-09 16:57:35.241`
         */
        UpdateTime: string;
        /**
         * 资源组名称。
         * @example `USER_DEFAULT`
         */
        GroupName: string;
        /**
         * 创建时间。
         * @example `2022-10-09 16:57:35.241`
         */
        CreateTime: string;
        /**
         * 资源组绑定的数据库账号列表，多个账号以英文逗号（,）分隔。
         * @example `testb,testc`
         */
        GroupUsers: string;
        /**
         * 节点数量。1个节点的资源量为16核64 GB。
         * @example `2`
         */
        NodeNum: number;
        /**
         * 资源组绑定的数据库账号列表。
         */
        GroupUserList: string[];
    }[];
    /**
     * 集群ID。
     * @example `am-bp1ub9grke1****`
     */
    DBClusterId: string;
}
