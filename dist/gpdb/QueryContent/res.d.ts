export interface QueryContentResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态，取值如下：
     * - **success**：成功。
     * - **fail**：失败。
     * @example `success`
     */
    Status: string;
    Matches: {
        /**
         * 匹配到的列表。
         */
        MatchList: {
            /**
             * 向量数据的唯一Id。
             * @example `doca-1234`
             */
            Id: string;
            /**
             * 文本内容。
             * @example `云原生数据仓库AnalyticDB PostgreSQL版提供简单、快速、经济高效的PB级云端数据仓库解决方案。`
             */
            Content: string;
            /**
             * 元数据Map。
             */
            Metadata: any;
            Vector: {
                /**
                 * 向量数据List。
                 */
                VectorList: number[];
            };
            /**
             * 文件名。
             * @example `my_doc.txt`
             */
            FileName: string;
            /**
             * 此条数据的相似度分数，其分数算法和创建索引时指定的算法(l2/ip/cosine)相关。
             * @example `0.12345`
             */
            Score: number;
            /**
             * 检索结果的来源。1表示向量检索，2表示全文检索，3表示双路召回。
             * @example `1`
             */
            RetrievalSource: number;
            /**
             * 文档加载器加载时的元信息。
             * @example `{"page_pos": 1}`
             */
            LoaderMetadata: string;
            /**
             * 查询结果图片的公网URL地址，有效时长2小时。
             * @example `https://xxx-cn-beijing.aliyuncs.com/image/test.png`
             */
            FileURL: string;
            /**
             * 重排分数。
             * @example `6.2345`
             */
            RerankScore: number;
        }[];
    };
    WindowMatches: {
        /**
         * 窗口化匹配到的列表。
         */
        windowMatches: {
            WindowMatch: {
                /**
                 * 单个top窗口化匹配到的列表。
                 */
                windowMatch: {
                    /**
                     * 向量数据的唯一ID。
                     * @example `doca-2345`
                     */
                    Id: string;
                    /**
                     * 文本内容。
                     * @example `云原生数据仓库AnalyticDB PostgreSQL版是一种大规模并行处理（MPP）数据仓库服务，可提供海量数据在线分析服务。`
                     */
                    Content: string;
                    /**
                     * 元数据Map。
                     */
                    Metadata: any;
                    /**
                     * 文件名。
                     * @example `my_doc.txt`
                     */
                    FileName: string;
                    /**
                     * 文档加载器加载时的元信息。
                     * @example `{"page_pos": 2}`
                     */
                    LoaderMetadata: string;
                }[];
            };
        }[];
    };
    /**
     * 向量化时使用的token数。
     * > token是指将输入的文本分割成的最小单位；token可以是一个单词、一个词组、一个标点符号、一个字符等。
     * @example `100`
     */
    EmbeddingTokens: string;
    /**
     * 本次查询的资源使用量
     */
    Usage: {
        /**
         * 向量化时使用的token数。
         * > token是指将输入的文本分割成的最小单位；token可以是一个单词、一个词组、一个标点符号、一个字符等。
         * @example `100`
         */
        EmbeddingTokens: string;
        /**
         * 向量化时使用的条目数。
         * > 条目是指对文字、图片做向量化处理时的处理数目，如对文字做一次处理，条目数是1，对图片做一次处理是2。
         * @example `10`
         */
        EmbeddingEntries: string;
    };
}
