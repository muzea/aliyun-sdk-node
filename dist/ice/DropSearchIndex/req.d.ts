export interface DropSearchIndexRequest {
    /**
     * 搜索库名称。
     * - 未填写搜索库名称时，默认情况下搜索索引会被创建在IMS的默认搜索库下。默认值ims-default-search-lib。
     * - 您还可以通过[QuerySearchLib](~~2584455~~)接口查询已有的搜索库信息。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 索引类别。取值：
     * - mm：大模型。
     * - face：人脸。
     * - aiLabel：智能标签。
     * @example `mm`
     */
    "IndexType": string;
}
