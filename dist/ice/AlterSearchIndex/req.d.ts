export interface AlterSearchIndexRequest {
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
    /**
     * 索引状态。默认值为Active，取值：
     * - Active：激活。
     * - Deactive：失效。
     * ><notice> 必须填写IndexStatus或IndexConfig两个参数中的一个。></notice>
     * @example `Active`
     */
    "IndexStatus"?: string;
    /**
     * 索引配置。
     * ><notice> 必须填写IndexStatus或IndexConfig两个参数中的一个。></notice>
     * @example `{}`
     */
    "IndexConfig"?: string;
}
