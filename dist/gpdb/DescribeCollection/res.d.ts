export interface DescribeCollectionResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 向量维度。
     * @example `1024`
     */
    Dimension: number;
    /**
     * 用于全文检索的字段，多个字段用英文逗号（,）分隔。
     * @example `title,content`
     */
    FullTextRetrievalFields: string;
    /**
     * 向量数据的元信息，为MAP格式的JSON字符串。其中key代表字段名，value代表数据类型。
     * ><warning>id、vector、to_tsvector字段为保留字段，禁止使用。></warning>
     */
    Metadata: any;
    /**
     * Distance Metrics。
     * @example `cosine`
     */
    Metrics: string;
    /**
     * 用于全文检索的分词器。
     * @example `zh_cn`
     */
    Parser: string;
    /**
     * 实例ID。
     * @example `gp-bp152460513z****`
     */
    DBInstanceId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 命名空间。
     * @example `mynamespace`
     */
    Namespace: string;
    /**
     * 接口返回详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * API执行状态，取值如下：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
}
