export interface ListOnlineConfigsResponse {
    /**
     * id of request
     * @example `E45380E8-994A-5402-9806-F114B3295FCF`
     */
    requestId: string;
    /**
     * List
     */
    result: {
        /**
         * 索引名称
         * @example `generation`
         */
        indexName: string;
        /**
         * 配置信息
         * @example `{\"specItems\":[{\"specKey\":\"YQ_KEYWORD_NUMBER_PLUS\",\"value\":\"1\"}]}`
         */
        config: string;
    }[];
}
