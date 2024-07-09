export interface GetLindormInstanceEngineListResponse {
    /**
     * 实例ID。
     * @example `ld-bp1nq34mv3smk****`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `B496BA0E-520C-59FC-BA04-196D8F3B07EF`
     */
    RequestId: string;
    /**
     * 引擎类型列表。
     */
    EngineList: {
        /**
         * 引擎类型，返回值：
         * - **lindorm**：宽表引擎。
         * - **tsdb**：时序引擎。
         * - **solr**：搜索引擎。
         * - **store**：文件引擎。
         * @example `lindorm`
         */
        EngineType: string;
        /**
         * 引擎的数据库连接信息列表。
         */
        NetInfoList: {
            /**
             * 表示宽表引擎的连接方式，返回值：
             * - **0**：默认为0，可以忽略
             * - **1**：使用HBase Java API访问宽表引擎地址。
             * - **2**：使用HBase 非Java API访问宽表引擎地址。
             * - **3**：使用CQL访问宽表引擎地址。
             * - **4**：使用Lindorm宽表SQL地址。
             * - **5**：使用Lindorm宽表S3兼容地址。
             * - **6**：使用Lindorm宽表MySQL兼容地址。
             * @example `1`
             */
            AccessType: number;
            /**
             * 数据库连接地址的端口号。
             * @example `30020`
             */
            Port: number;
            /**
             * 数据库连接地址。
             * @example `ld-bp1nq34mv3smk****-proxy-lindorm.lindorm.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 数据库连接地址的网络类型，返回值：
             * - **0**：公网。
             * - **2**：专有网络。
             * @example `2`
             */
            NetType: string;
        }[];
    }[];
}
