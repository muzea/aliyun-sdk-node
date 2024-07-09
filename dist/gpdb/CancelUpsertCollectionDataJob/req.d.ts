export interface CancelUpsertCollectionDataJobRequest {
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
     * 上传向量数据的任务ID，由`UpsertCollectionDataAsync`接口获得。
     * @example `bf8f7bc4-9276-44f7-9c22-1d06edc8dfd1`
     */
    "JobId": string;
}
