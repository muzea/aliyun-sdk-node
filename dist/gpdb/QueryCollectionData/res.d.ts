export interface QueryCollectionDataResponse {
    Matches: {
        /**
         * 数据列表。
         */
        match: {
            /**
             * 向量数据的唯一ID。
             * @example `doca-1234`
             */
            Id: string;
            /**
             * 元数据。
             */
            Metadata: any;
            Values: {
                /**
                 * 向量数据列表。
                 */
                value: number[];
            };
            /**
             * 此条数据的相似度分数，其分数算法和创建索引时指定的算法`(l2/ip/cosine)`相关。
             * @example `0.12345`
             */
            Score: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 状态，取值说明：
     * - **success**：成功。
     * - **fail**：失败。
     * @example `success`
     */
    Status: string;
    /**
     * 请求失败时的详细信息。
     * @example `0.1234`
     */
    Message: string;
    /**
     * 当请求Offset不为0时才返回，返回值为该检索条件的命中总数。
     * @example `100`
     */
    Total: number;
}
