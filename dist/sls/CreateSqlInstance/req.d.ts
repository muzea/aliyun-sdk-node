export interface CreateSqlInstanceRequest {
    /**
     * 需要开启SQL独享版的Project名称。
     */
    "project": string;
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * CU（ComputeUnit）是SQL独享版运行过程中可以并行使用的计算核数
         * @example `2`
         */
        cu: number;
        /**
         * 是否为Project默认开启SQL独享版。 如果为true，当前Project下的所有查询和分析操作（包括告警、仪表盘等），都使用SQL独享版。
         */
        useAsDefault: boolean;
    };
}
