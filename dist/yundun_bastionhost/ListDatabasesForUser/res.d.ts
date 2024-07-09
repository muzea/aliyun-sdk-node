export interface ListDatabasesForUserResponse {
    /**
     * 查询到的数据库列表。
     */
    Databases: {
        /**
         * 数据库地址类型。取值：
         * - **Public** ：公网地址
         * - **Private** ：私网地址
         * @example `Private`
         */
        ActiveAddressType: string;
        /**
         * 数据库实例的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 数据库实例ID。
         * @example `36`
         */
        DatabaseId: string;
        /**
         * 数据库实例名称。
         * @example `MySQL56`
         */
        DatabaseName: string;
        /**
         * 数据库的端口。
         * @example `3306`
         */
        DatabasePort: number;
        /**
         * 数据库的私网地址，可为域名或IP地址。
         * @example `192.168.XX.XX`
         */
        DatabasePrivateAddress: string;
        /**
         * 数据库的公网地址，可为域名或IP地址。
         * @example `www.example.com`
         */
        DatabasePublicAddress: string;
        /**
         * 数据库类型，取值：
         * - **MySQL**
         * - **Oracle**
         * - **PostgreSQL**
         * - **SQLServer**
         * @example `MySQL`
         */
        DatabaseType: string;
        /**
         * 数据库所属的网络域的ID。
         * @example `2`
         */
        NetworkDomainId: string;
        /**
         * 数据库的来源。取值：
         * - **Local**：本地数据库实例
         * - **Rds**：RDS类型数据库实例
         * - **PolarDB**: PolarDB类型数据库实例
         * @example `Local`
         */
        Source: string;
        /**
         * 数据库对应的RDS实例ID或PolarDB实例ID。
         * > **Source**为**Local**时，该参数返回值为空。
         * @example `i-wz9fv2hwux78x9******`
         */
        SourceInstanceId: string;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A8A665B9-8550-4942-9DEE-73198051856B`
     */
    RequestId: string;
    /**
     * 查询到的数据库总数量。
     * @example `15`
     */
    TotalCount: number;
}
