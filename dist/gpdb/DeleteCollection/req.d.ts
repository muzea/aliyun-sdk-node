export interface DeleteCollectionRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 命名空间。
     * > 您通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 命名空间对应的密码。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 集合名。
     * > 您可以通过[ListCollections](~~2401503~~)接口查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
