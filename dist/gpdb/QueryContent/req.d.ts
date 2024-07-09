export interface QueryContentRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 命名空间，默认为public。
     * > 您可以通过[CreateNamespace](~~2401495~~)接口创建，通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 文档库名称。
     * > 由[CreateDocumentCollection](~~2618448~~)接口创建。您可以调用[ListDocumentCollections](~~2618452~~)接口查看已经创建的文档库。
     * @example `document`
     */
    "Collection": string;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间对应的密码。
     * > 本值为[CreateNamespace](~~2401495~~)接口指定。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 用于检索的文本内容。
     * @example `ADBPG是什么？`
     */
    "Content"?: string;
    /**
     * 要查询的数据的过滤条件，格式为SQL的WHERE格式。
     * @example `title = 'test'`
     */
    "Filter"?: string;
    /**
     * 召回窗口。当该值不为空时，增加返回检索结果的上下文。格式为2个元素的数组：List<A, B>，其中-10<=A<=0，0<=B<=10。
     * > - 推荐当文档切分过碎、检索可能会丢失上下文信息时使用该参数。
     * > - 重排优先窗口化，即先rerank，再窗口化处理。
     */
    "RecallWindow"?: number[];
    /**
     * 设置返回top结果数量。
     * @example `10`
     */
    "TopK"?: number;
    /**
     * 重排因子。当该值不为空时，会对向量检索结果再做一次重排。取值范围：1<RerankFactor<=5。
     * > - 当文档切分稀疏时，重排效率慢。
     * > - 建议重排个数（TopK*Factor（向上取整））不超过50。
     * @example `2`
     */
    "RerankFactor"?: number;
    /**
     * 是否使用全文检索（双路召回）。默认为false，仅采用向量检索。
     * @example `true`
     */
    "UseFullTextRetrieval"?: boolean;
    /**
     * 检索时的相似度算法。此值为空时则采用创建知识库时指定的算法，建议如无特殊需求不需设置。
     * > 取值说明：
     * > - **l2**：欧氏距离。
     * > - **ip**：点积（内积）距离。
     * > - **cosine**：余弦相似度。
     * @example `cosine`
     */
    "Metrics"?: string;
    /**
     * 以图搜图场景中，待搜索的图片源文件名。
     * > 图片文件必须带有文件后缀，当前支持的图片后缀：bmp、jpg、jpeg、png、 tiff。
     * @example `test.jpg`
     */
    "FileName"?: string;
    /**
     * 以图搜图场景中，公网可访问的图片文件URL地址。
     * > 图片文件必须带有文件后缀，当前支持的图片后缀：bmp、jpg、jpeg、png、tiff。
     * @example `https://xx/myImage.jpg
    `
     */
    "FileUrl"?: string;
    /**
     * 是否返回向量。默认为false。
     * > - **false**：不返回向量。
     * > - **true**：返回向量。
     * @example `true`
     */
    "IncludeVector"?: boolean;
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
     * 默认为空，表示要返回的metadata字段，多个字段用逗号分隔。
     * @example `title,page`
     */
    "IncludeMetadataFields"?: string;
}
