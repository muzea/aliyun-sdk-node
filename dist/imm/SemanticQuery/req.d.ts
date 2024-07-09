export interface SemanticQueryRequest {
    /**
     * 目前不再提供该参数。
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。范围(0,1000]。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 项目名称。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 需要进行语义搜索的内容。
     * @example `2021年4月杭州的风景`
     */
    "Query": string;
    /**
     * 仅返回特定字段的值，而不是全部已有的元信息字段。可用于降低返回的结构体大小。
     * 不填或留空则返回所有字段。
     */
    "WithFields"?: string[];
    /**
     * 搜索的媒体类型。如留空则默认值为：
     * ["image"]
     */
    "MediaTypes"?: string[];
}
