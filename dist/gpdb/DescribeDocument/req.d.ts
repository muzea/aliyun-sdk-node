export interface DescribeDocumentRequest {
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
     * 命名空间对应的密码。
     * > 本值为[CreateNamespace](~~2401495~~)接口指定。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 文档库名称。
     * > 由[CreateDocumentCollection](~~2618448~~)接口创建。您可以调用[ListDocumentCollections](~~2618452~~)接口查看已经创建的文档库。
     * @example `document`
     */
    "Collection": string;
    /**
     * 实例所在 Region ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文档名。
     * > 可以通过[ListDocuments](~~2618453~~)接口查看文档列表。
     * @example `music.txt`
     */
    "FileName": string;
}
