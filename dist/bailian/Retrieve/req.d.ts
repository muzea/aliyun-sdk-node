export interface RetrieveRequest {
    /**
     * 测试文本
     * @example `百炼平台介绍`
     */
    "Query"?: string;
    /**
     * 向量检索topK，默认 100
     * @example `100`
     */
    "DenseSimilarityTopK"?: number;
    /**
     * 是否开启reranking，默认true
     * @example `true`
     */
    "EnableReranking"?: boolean;
    /**
     * 是否开启rewrite,默认值是false
     * @example `false`
     */
    "EnableRewrite"?: boolean;
    /**
     * Rank配置（目前支持Rank模型选择）
     */
    "Rerank"?: {
        /**
         * Rank模型名称
         * @example `gte-rerank-hybrid`
         */
        ModelName: string;
    }[];
    /**
     * rerank后的最小分过滤
     * @example `0.20`
     */
    "RerankMinScore"?: number;
    /**
     * rerank后的top n 返回数据
     * @example `5`
     */
    "RerankTopN"?: number;
    /**
     * 对话改写配置
     */
    "Rewrite"?: {
        /**
         * 对话改写模型名称
         * @example `conv-rewrite-qwen-1.8b（目前只支持该模型）`
         */
        ModelName: string;
    }[];
    /**
     * 稀疏相似度TopK
     * @example `100`
     */
    "SparseSimilarityTopK"?: number;
    /**
     * 业务空间id，请登录百炼后，在左上角业务空间详情中获取。
     * @example `ws_3Nt27MYcoK191ISp`
     */
    "WorkspaceId": string;
    /**
     * 索引ID
     * @example `5pwe0m2g6t`
     */
    "IndexId": string;
    /**
     * 是否保存历史文档召回测试数据
     * @example `false`
     */
    "SaveRetrieverHistory"?: boolean;
}
