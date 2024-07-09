export interface UpdateSqlInstanceRequest {
    /**
     * 需要开启 SQL 独享版的 Project 名称。
     */
    "project": string;
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * CU（ComputeUnit）是 SQL 独享版运行过程中可以并行使用的计算核数。
         * @example `2`
         */
        cu: number;
        /**
         * 是否为 Project 默认开启 SQL 独享版。 如果为 true，当前 Project 下的所有查询和分析操作（包括告警、仪表盘等），都使用 SQL 独享版。
         */
        useAsDefault: boolean;
    };
}
