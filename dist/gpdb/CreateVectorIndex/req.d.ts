export interface CreateVectorIndexRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 集合名。
     * > 您可以[ListCollections](~~2401503~~)接口查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 向量维度。
     * > 此值需和上传向量[UpsertCollectionData](~~2401493~~)接口的向量数据Rows. Vector长度一致。
     * @example `1024`
     */
    "Dimension": number;
    /**
     * 具有rds_superuser权限的管理账户名称。
     * > 您可以通过控制台->账号管理来创建账号，或者通过[CreateAccount](~~2361789~~)接口创建。
     * @example `testaccount`
     */
    "ManagerAccount": string;
    /**
     * 管理账户密码。
     * @example `testpassword`
     */
    "ManagerAccountPassword": string;
    /**
     * 向量构建索引时的方法。取值说明：
     * - l2：欧氏距离。
     * - ip：点积（内积）距离。
     * - cosine：余弦相似度。
     * @example `cosine`
     */
    "Metrics"?: string;
    /**
     * 命名空间，默认为public。
     * > 您可以通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 索引是否开启PQ（Product quantization）算法加速，数据量大于50w时建议开启。取值说明：
     * - 0：关闭。
     * - 1：开启（默认）。
     * @example `1`
     */
    "PqEnable"?: number;
    /**
     * HNSW算法中的最大邻居数，范围为1～1000。接口会根据向量维度自动设置此值，一般不需要手动设置。
     * > 建议根据向量维度来设置：
     * > - 小于等于384：16
     * > - 大于384小于等于768：32
     * > - 大于768小于等于1024：64
     * > -  大于1024：128
     * @example `64`
     */
    "HnswM"?: number;
    /**
     * 是否使用mmap构建HNSW索引，默认为0。如果数据不需要删除，且对上传数据的速度性能有要求时，建议设置为1。
     * >
     * > - 为0时，默认会采用段页式存储构建索引，这种模式可以使用PostgreSQL中的shared_buffer做缓存，支持删除和更新等操作。
     * > - 为1时，该索引会采用mmap构建索引，该模式不支持删除更新等操作。
     * @example `0`
     */
    "ExternalStorage"?: number;
}
