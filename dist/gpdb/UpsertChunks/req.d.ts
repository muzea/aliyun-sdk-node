export interface UpsertChunksRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 实例所在地域ID。
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
     * 文件名。
     * > 指定文件名不为空时，则会覆盖上传此文件名对应的数据；为空时，则直接将chunks数据追加上传到文档库中。
     * @example `mydoc.txt`
     */
    "FileName"?: string;
    /**
     * 切分后的文档列表。
     */
    "TextChunks"?: {
        /**
         * 文档内容。
         * @example `云原生数据仓库AnalyticDB PostgreSQL版提供简单、快速、经济高效的PB级云端数据仓库解决方案。`
         */
        Content: string;
        /**
         * 元数据。
         * @example `{"title":"test"}`
         */
        Metadata: any;
    }[];
}
