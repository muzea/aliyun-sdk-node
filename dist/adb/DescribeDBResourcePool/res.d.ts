export interface DescribeDBResourcePoolResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 资源组信息列表。
     */
    PoolsInfo: {
        /**
         * SQL查询的执行模式，取值说明：
         * - **batch**：批查询模式。
         * - **interactive**：交互执行模式。
         * > 详情请参见[查询执行模式](~~189502~~)。
         * @example `default_type`
         */
        QueryType: string;
        /**
         * 更新时间。
         * @example `2022-03-09 16:57:35.241`
         */
        UpdateTime: string;
        /**
         * 资源组名称。
         * @example `USER_DEFAULT`
         */
        PoolName: string;
        /**
         * 创建时间。
         * @example `2022-03-09 16:57:35.241`
         */
        CreateTime: string;
        /**
         * 资源组绑定的数据库账号。
         * @example `testb,testc`
         */
        PoolUsers: string;
        /**
         * 节点数量。
         * > 1个节点的资源量为16核64 GB。
         * @example `2`
         */
        NodeNum: number;
    }[];
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp11q28kvl688****`
     */
    DBClusterId: string;
}
