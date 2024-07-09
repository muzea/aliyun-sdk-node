export interface CreateIndexRequest {
    /**
     * 业务空间id，请登录百炼后，在左上角业务空间详情中获取。
     * @example `ws_3Nt27MYcoK191ISp`
     */
    "WorkspaceId": string;
    /**
     * 索引名称
     * @example `示例：企业帮助文档库`
     */
    "Name": string;
    /**
     * 数据源结构类型
     * @example `unstructured`
     */
    "StructureType": string;
    /**
     * 向量模型名称
     * @example `text-embedding-v2`
     */
    "EmbeddingModelName"?: string;
    /**
     * 排序模型名称
     * @example `gte-rerank-hybrid`
     */
    "RerankModelName"?: string;
    /**
     * 相似度阈值：设定最低分数标准，只有超过这个阈值的检索结果才会被考虑用于后续的生成过程
     * @example `0.20`
     */
    "RerankMinScore"?: number;
    /**
     * 分段预估长度：取值范围[1-2048]
     * @example `128`
     */
    "ChunkSize"?: number;
    /**
     * 分段重叠长度:当前分片与上一个分片重叠的文本长度;取值范围[0-1024]
     * @example `16`
     */
    "OverlapSize"?: number;
    /**
     * 分句标识符
     * @example `,`
     */
    "Separator"?: string;
    /**
     * 数据中心数据类型
     * @example `DATA_CENTER_FILE`
     */
    "SourceType": string;
    /**
     * 文档id列表
     */
    "DocumentIds"?: string[];
    /**
     * 类目ID列表
     */
    "CategoryIds"?: string[];
    /**
     * 索引存储类型
     * @example `DEFAULT`
     */
    "SinkType": string;
    /**
     * 索引实例ID（仅在索引存储类型是ADB时传入）
     * @example `gp-bp321093j84`
     */
    "SinkInstanceId"?: string;
    /**
     * 索引实例地域（仅在索引存储类型是ADB时传入）
     * @example `cn-hangzhou`
     */
    "SinkRegion"?: string;
    /**
     * 结构化索引设置信息（依赖数据中心结构化，暂不开放）
     */
    "Columns"?: {
        /**
         * 数据中心英文列名
         * @example `clomn_1`
         */
        Column: string;
        /**
         * 数据中心实际列名
         * @example `学校`
         */
        Name: string;
        /**
         * 索引类型
         * @example `string`
         */
        Type: string;
        /**
         * 是否参与检索:开启后表示在此列数据中进行搜索
         * @example `true
        `
         */
        IsSearch: boolean;
        /**
         * 是否参与模型回复:开启后表示被搜索到的数据行对应的本列数据提取出来给到大模型进行生成
         * @example `true`
         */
        IsRecall: boolean;
    }[];
    /**
     * 索引描述
     * @example `这是索引的描述信息。`
     */
    "Description"?: string;
}
