export interface ListDateSourceGenerationsResponse {
    /**
     * id of request
     * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
     */
    requestId: string;
    /**
     * List
     */
    result: {
        /**
         * 索引全量版本
         * @example `1626143930`
         */
        generation: number;
        /**
         * build index 开始时间
         * @example `1626143673`
         */
        createTime: number;
        /**
         * 状态
         * @example `STOPPED`
         */
        status: string;
        /**
         * 离线部署id
         * @example `122`
         */
        buildDeployId: number;
        /**
         * Key 索引名称
         * value 分片数量
         */
        partition: any;
        /**
         * 增量时间戳
         * @example `1626143673`
         */
        timestamp: number;
        /**
         * dump表索引文件存储地址
         * @example `hdfs://opensearch/dump.json`
         */
        dataDumpRoot: string;
    }[];
}
