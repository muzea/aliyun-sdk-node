export interface GetNodeConfigResponse {
    /**
     * Id of the request
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * 结果集
     */
    result: {
        /**
         * 数据分片数
         * @example `1`
         */
        dataFragmentNumber: number;
        /**
         * 数据副本数
         * @example `1`
         */
        dataDuplicateNumber: number;
        /**
         * 最小服务比例
         * @example `50`
         */
        minServicePercent: number;
        /**
         * 集群是否挂载
         * @example `true`
         */
        published: boolean;
        /**
         * 在线生效（索引是否从在线下掉）
         * @example `true`
         */
        active: boolean;
        /**
         * 流量比例
         * @example `100`
         */
        flowRatio: number;
    };
}
