export interface GetDistributedTablesBufferSizeResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 分布式表本地写入数据缓存。单位：GiB。
         * @example `100`
         */
        BufferSizeGiB: number;
    };
    /**
     * 请求ID。
     * @example `48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0`
     */
    RequestId: string;
}
