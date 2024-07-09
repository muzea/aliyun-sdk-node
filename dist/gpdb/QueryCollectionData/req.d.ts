export interface QueryCollectionDataRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 集合名。
     * > 您可以通过[ListCollections](~~2401503~~)接口查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 命名空间。
     * > 您可以通过[ListNamespaces](~~2401502~~)查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 命名空间对应的密码。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 用于全文检索的内容。即此值为空时，仅使用向量检索；不为空时，使用向量和全文双路检索。
     * > 和Vector参数不能同时为空。
     * @example `hello_world`
     */
    "Content"?: string;
    /**
     * 过滤器。
     * @example `response > 200`
     */
    "Filter"?: string;
    /**
     * 设置返回top结果数量。
     * @example `10`
     */
    "TopK": number;
    /**
     * 向量数据，长度和[CreateCollection](~~2401497~~)接口的维度一致。
     * > 当vector为空时，只返回全文检索结果。
     */
    "Vector"?: number[];
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 检索时的相似度算法。取值说明：
     * - **l2**：欧氏距离。
     * - **ip**：点积（内积）距离。
     * - **cosine**：余弦相似度。
     * > 此值为空时，则使用构建索引时指定的算法。
     * @example `cosine`
     */
    "Metrics"?: string;
    /**
     * 是否返回向量数据。取值说明：
     * - **true**：返回向量数据。
     * - **false**：不返回向量数据，用于全文检索场景。
     * @example `true`
     */
    "IncludeValues"?: boolean;
    /**
     * 双路召回算法，默认为空(即直接将向量和全文的分数比较并排序)。
     * 可选值：
     * - RRF：倒数排序融合(Reciprocal rank fusion)，有一个参数k控制融合效果，详见HybridSearchArgs配置；
     * - Weight：比重排序，采用一个参数alpha控制向量和全文的分数比重，然后再排序，参数详见HybridSearchArgs配置；
     * - Cascaded：先全文检索再在其基础上进行向量检索；
     * @example `RRF`
     */
    "HybridSearch"?: string;
    /**
     * 双路召回的算法参数。目前支持RRF和Weight两种：
     * - RRF：指定计算分数的算法的`1/(k+rank_i)`中的k常数，范围大于1的正整数，格式为：
     * ```
     * {
     *    "RRF": {
     *     "k": 60
     *    }
     * }
     * ```
     * - Weight: 计算公式`alpha * vector_score + (1-alpha) * text_score`，参数alpha表示向量和全文的检索分数比重，范围为0～1，其中0表示只全文，1表示只向量：
     * ```
     * {
     *    "Weight": {
     *     "alpha": 0.5
     *    }
     * }
     * ```
     */
    "HybridSearchArgs"?: any;
    /**
     * 默认为空，表示排序的依据字段。不支持双路召回场景。
     * 字段必须属于metadata或表里的默认字段比如id，格式支持：
     * - 单个字段，如chunk_id；
     * - 多个字段，用逗号连接，如block_id, chunk_id；
     * - 支持反序，如: block_id DESC, chunk_id DESC；
     * @example `chunk_id`
     */
    "OrderBy"?: string;
    /**
     * 默认为空，表示分页查询时的检索起点。不支持双路召回场景。
     * 范围必须>=0。当此值不为空时，会返回Total表示总的命中数。此参数配合TopK使用，比如要分页20检索chunk_id 0~44的chunks，则要请求3次：
     * - Offset=0,TopK=20返回chunk_id 0~19
     * - Offset=20,TopK=20返回chunk_id 20~39
     * - Offset=30,TopK=20返回chunk_id 40~44
     * @example `0`
     */
    "Offset"?: number;
    /**
     * 默认为空，表示要返回的metadata字段，多个字段用逗号分隔。
     * @example `title,content`
     */
    "IncludeMetadataFields"?: string;
}
