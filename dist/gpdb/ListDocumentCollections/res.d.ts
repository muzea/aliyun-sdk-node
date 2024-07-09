export interface ListDocumentCollectionsResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 创建状态，取值说明：
     * - **success**：成功
     * - **fail**：失败
     * @example `success`
     */
    Status: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 总条数。
     * @example `10`
     */
    Count: number;
    Items: {
        /**
         * 文档库列表。
         */
        CollectionList: {
            /**
             * 文档库名称。
             * @example `document`
             */
            CollectionName: string;
            /**
             * 向量化算法。
             * @example `text-embeddding-v1`
             */
            EmbeddingModel: string;
            /**
             * 向量维度。
             * @example `1536`
             */
            Dimension: number;
            /**
             * 用于全文检索的字段，多个字段用英文逗号（,）分隔。
             * @example `title`
             */
            FullTextRetrievalFields: string;
            /**
             * 元数据。
             * @example `{'page': 'int', 'title': 'text'}`
             */
            Metadata: string;
            /**
             * 用于全文检索的分词器。
             * @example `zh_cn`
             */
            Parser: string;
            /**
             * 向量相似度算法。
             * @example `cosine`
             */
            Metrics: string;
        }[];
    };
}
