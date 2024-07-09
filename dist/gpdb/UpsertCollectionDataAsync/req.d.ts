export interface UpsertCollectionDataAsyncRequest {
    /**
     * 实例所在 Region ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 命名空间，默认为public。
     * > 您可以通过CreateNamespace接口创建，通过ListNamespaces接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 集合名。
     * > 您可以通过[ListCollections](~~2401503~~)接口查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 命名空间对应的密码。
     * > 本值为CreateNamespace接口指定。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 公网可访问的向量数据文件URL地址。
     * >
     * > - 文件内容格式为jsonl，即每一行是一个特定格式的json数据，代表一组向量数据。
     * > - 单行的数据结构为`{String Id; Map<String, Object> Metadata; List<Double> Vector}`, 如`{"Id":"myid", "Metadata": {"my_meta_key": "my_meta_value"}, "Vector": [1.234, -0.123]}`。
     * > - 建议使用SDK调用此接口，SDK帮封装了UpsertCollectionDataAsyncAdvance方法可直接上传本地文件作为数据源。
     * @example `https://xx/vectors.jsonl`
     */
    "FileUrl": string;
}
