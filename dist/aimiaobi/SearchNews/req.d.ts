export interface SearchNewsRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 检索源列表
     */
    "SearchSources"?: string[];
    /**
     * 检索Query
     * @example `检索Query`
     */
    "Query"?: string;
    /**
     * 每页记录数
     * @example `35`
     */
    "PageSize"?: number;
    /**
     * 页码
     * @example `81`
     */
    "Page"?: number;
    /**
     * 是否包含正文
     * @example `false`
     */
    "IncludeContent"?: boolean;
    /**
     * 是否过滤空内容
     * @example `false`
     */
    "FilterNotNull"?: boolean;
}
