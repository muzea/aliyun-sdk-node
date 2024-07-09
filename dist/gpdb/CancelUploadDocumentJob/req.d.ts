export interface CancelUploadDocumentJobRequest {
    /**
     * 已经开启向量引擎优化实例ID。
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
     * 文档库名称。
     * > 由[CreateDocumentCollection](~~2618448~~)接口创建。您可以调用[ListDocumentCollections](~~2618452~~)接口查看已经创建的文档库。
     * @example `document`
     */
    "Collection": string;
    /**
     * 实例所在Region ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间对应的密码。
     * > 本值为CreateNamespace接口指定。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 上传文档的任务ID，由`UploadDocumentAsync`接口获得。
     * @example `231460f8-75dc-405e-a669-0c5204887e91`
     */
    "JobId": string;
}
