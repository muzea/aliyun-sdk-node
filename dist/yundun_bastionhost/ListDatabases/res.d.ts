export interface ListDatabasesResponse {
    /**
     * 查询到的数据库列表。
     */
    Databases: {
        /**
         * 数据库地址类型。取值：
         * - **Public** ：公网地址
         * - **Private** ：私网地址
         * @example `Public`
         */
        ActiveAddressType: string;
        /**
         * 数据库的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 数据库实例ID。
         * @example `9`
         */
        DatabaseId: string;
        /**
         * 数据库实例名称。
         * @example `MySQL0`
         */
        DatabaseName: string;
        /**
         * 数据库的端口。
         * @example `3306`
         */
        DatabasePort: number;
        /**
         * 数据库的私网地址，可为域名或ip地址。
         * @example `rm-wz973w7******`
         */
        DatabasePrivateAddress: string;
        /**
         * 数据库的公网地址，可为域名或ip地址。
         * @example `rm-uf65n2******`
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
         * @example `8`
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
         * @example `i-wz9ejupczf41******`
         */
        SourceInstanceId: string;
        /**
         * 数据库对应的RDS实例或PolarDB实例所在地域ID。
         * @example `cn-hangzhou`
         */
        SourceInstanceRegionId: string;
        /**
         * 数据库实例状态。取值：
         *  - **Normal**   ：正常
         * - **Release**： 已释放
         * @example `Normal`
         */
        SourceInstanceState: string;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的数据库总数量。
     * @example `4`
     */
    TotalCount: number;
}
