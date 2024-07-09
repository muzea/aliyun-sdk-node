export interface GetDatabaseResponse {
    /**
     * 查询到的数据库实例详细信息。
     */
    Database: {
        /**
         * 数据库实例地址类型。取值：
         * - Public ：公网地址
         * - Private ：私网地址
         * @example `Public`
         */
        ActiveAddressType: string;
        /**
         * 数据库实例备注。
         * @example `comment`
         */
        Comment: string;
        /**
         * 数据库实例ID。
         * @example `22`
         */
        DatabaseId: string;
        /**
         * 数据库实例名称。
         * @example `test`
         */
        DatabaseName: string;
        /**
         * 数据库的端口。
         * @example `3306`
         */
        DatabasePort: number;
        /**
         * 数据库实例的私网地址。
         * @example `rm-bp1zq******`
         */
        DatabasePrivateAddress: string;
        /**
         * 数据库实例的公网地址。
         * @example `rm-uf65******`
         */
        DatabasePublicAddress: string;
        /**
         * 数据库类型。取值：
         * - **mysql**
         * - **sqlserver**
         * - **postgresql**
         * - **oracle**
         * @example `MySQL`
         */
        DatabaseType: string;
        /**
         * 数据库所属的网络域的ID。
         * @example `45`
         */
        NetworkDomainId: string;
        /**
         * 指定新创建数据库实例的来源。取值：
         * - **Local**：本地数据库实例
         * - **Rds**：RDS类型数据库实例
         * - **PolarDB**: PolarDB类型数据库实例
         * @example `Local`
         */
        Source: string;
        /**
         * 数据库对应的RDS实例ID或PolarDB实例ID。
         * > **Source**为**Local**时，该参数返回值为空。
         * @example `i-wz9527ob0e0nftcsffke`
         */
        SourceInstanceId: string;
        /**
         * 数据库对应的RDS实例或PolarDB实例所在的区域ID。
         * @example `cn-hangzhou`
         */
        SourceInstanceRegionId: string;
        /**
         * 数据库实例状态。取值：
         *  - **Normal**：正常
         * - **Release**：已释放
         * @example `Normal`
         */
        SourceInstanceState: string;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4D72B883-9D15-5B05-B987-DFD10EB1FFB4`
     */
    RequestId: string;
}
