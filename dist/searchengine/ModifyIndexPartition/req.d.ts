export interface ModifyIndexPartitionRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 数据源名称
         * @example `ha-cn-pl32rf0****_test_api`
         */
        dataSourceName: string;
        /**
         * generation 主键
         * @example `1633293829`
         */
        generation: number;
        /**
         * 机房
         * @example `sz_vpc_domain_1`
         */
        domainName: string;
        /**
         * 索引信息
         */
        indexInfos: {
            /**
             * 索引名称
             * @example `test_api`
             */
            indexName: string;
            /**
             * 索引对应的分片数
             * @example `3`
             */
            partitionCount: number;
            /**
             * 并发数，默认是 1
             * @example `1`
             */
            parallelNum: number;
        }[];
    };
}
