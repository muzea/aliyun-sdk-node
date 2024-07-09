export interface CreateCollectionRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp152460513z****`
     */
    "DBInstanceId": string;
    /**
     * 具有rds_superuser权限的管理账号名称。
     * > 您可以调用[CreateAccount](~~2361789~~)接口创建账号。
     * @example `testaccount`
     */
    "ManagerAccount": string;
    /**
     * 管理账号密码。
     * @example `testpassword`
     */
    "ManagerAccountPassword": string;
    /**
     * 命名空间。
     * > 您可以通过[CreateNamespace](~~2401495~~)接口创建，通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 要创建的集合名。
     * > 名称需符合PostgreSQL对象名限制。
     * @example `document`
     */
    "Collection": string;
    /**
     * 向量维度。
     * > 如果指定此值，会构建索引，且后续上传向量数据接口[UpsertCollectionData](~~2401493~~)的Rows.Vector长度需和此值一致。如果不指定此值，可以后续调用[CreateVectorIndex](~~2401499~~)构建索引。
     * @example `1024`
     */
    "Dimension"?: number;
    /**
     * 用于全文检索的字段，多个字段用英文逗号（,）分隔，且字段必须属于Metadata里定义的key。
     * @example `title,content`
     */
    "FullTextRetrievalFields"?: string;
    /**
     * 向量数据的元信息，为MAP格式的JSON字符串。其中key代表字段名，value代表数据类型。
     * ><warning>id、vector、to_tsvector、source字段为保留字段，禁止使用。></warning>
     * @example `{"title":"text","content":"text","response":"int"}`
     */
    "Metadata": string;
    /**
     * 用于全文检索的分词器，默认为zh_cn。
     * @example `zh_cn`
     */
    "Parser"?: string;
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 向量构建索引时的方法。取值说明：
     * - l2：欧氏距离。
     * - ip：点积（内积）距离。
     * - cosine：余弦相似度。
     * @example `cosine`
     */
    "Metrics"?: string;
    /**
     * HNSW算法中的最大邻居数，范围为1～1000。接口会根据向量维度自动设置此值，一般不需要手动设置。
     * > 建议根据向量维度来设置：
     * >- 小于等于384：16
     * >- 大于384小于等于768：32
     * >- 大于768小于等于1024：64
     * >- 大于1024：128
     * @example `64`
     */
    "HnswM"?: number;
    /**
     * 索引是否开启PQ(Product quantization)算法加速，数据量大于50w时建议开启。取值说明：
     * - 0：关闭。
     * - 1：开启（默认）。
     * @example `1`
     */
    "PqEnable"?: number;
    /**
     * 是否使用mmap构建HNSW索引，默认为0。如果数据不需要删除，且对上传数据的速度性能有要求时，建议设置为1。
     * >
     * > - 为0时，默认会采用段页式存储构建索引，这种模式可以使用PostgreSQL中的shared_buffer做缓存，支持删除和更新等操作。
     * > - 为1时，该索引会采用mmap构建索引，该模式不支持删除更新等操作。
     * @example `0`
     */
    "ExternalStorage"?: number;
}
