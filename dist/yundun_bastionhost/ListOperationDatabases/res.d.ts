export interface ListOperationDatabasesResponse {
    /**
     * 数据库实例列表。
     */
    Databases: {
        /**
         * 数据库的地址类型。取值：
         * - **Public**：公网地址有效
         * - **Private**：私网地址有效
         * @example `Private`
         */
        ActiveAddressType: string;
        /**
         * 数据库实例的备注信息。
         * @example `cpp`
         */
        Comment: string;
        /**
         * 数据库实例ID。
         * @example `26`
         */
        DatabaseId: string;
        /**
         * 数据库实例名称。
         * @example `zDatabase`
         */
        DatabaseName: string;
        /**
         * 数据库的端口。
         * @example `3306`
         */
        DatabasePort: number;
        /**
         * 数据库私网地址。
         * @example `rm-b******9b.mysql.rds.aliyuncs.com`
         */
        DatabasePrivateAddress: string;
        /**
         * 数据库公网地址。
         * @example `rm-uf******p45.mysql.rds.aliyuncs.com`
         */
        DatabasePublicAddress: string;
        /**
         * 数据库类型，取值：
         * - **MySQL**
         * - **PostgreSQL**
         * - **Oracle**
         * - **SQLServer**
         * @example `MySQL`
         */
        DatabaseType: string;
        /**
         * 数据库实例的来源。
         * - **Local**：本地主机
         * - **Rds**：RDS数据库
         * - **PolarDB**：PolarDB数据库
         * @example `Local`
         */
        Source: string;
        /**
         * RDS实例ID。
         * @example `i-wz9225bhipya******`
         */
        SourceInstanceId: string;
        /**
         * RDS的源实例地域ID。
         * @example `cn-shanghai`
         */
        SourceInstanceRegionId: string;
        /**
         * 数据库实例的状态：
         *  - **Normal**：正常
         * - **Release**：已释放
         * @example `Normal`
         */
        SourceInstanceState: string;
    }[];
    /**
     * 唯一请求ID。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的数据库总数量。
     * @example `15`
     */
    TotalCount: number;
}
