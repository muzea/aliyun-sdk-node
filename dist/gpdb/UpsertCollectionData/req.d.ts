export interface UpsertCollectionDataRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp152460513z****`
     */
    "DBInstanceId": string;
    /**
     * 集合名。
     * > 可以通过[CreateCollection](~~2401497~~)创建，并通过[ListCollections](~~2401503~~)查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 命名空间，用于租户隔离，默认为public。
     * > 可以通过[CreateNamespace](~~2401495~~)创建，通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 命名空间对应的密码。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 向量数据列表。
     */
    "Rows"?: {
        /**
         * 此条向量数据的唯一ID。
         * > 如果为空，则由数据库uuidgen自动生成。如果不为空，且和数据库里已有的ID冲突，则会使用API的数据更新数据库里的值。
         * @example `854c6949-411c-4b47-aec4-e324735f9574`
         */
        Id: string;
        /**
         * 此条向量数据对应的元信息。其中key需和[CreateCollection](~~2401497~~)接口定义的Metadata的key一致。
         */
        Metadata: any;
        /**
         * 向量数据列表，长度和[CreateCollection](~~2401497~~)接口的维度一致。
         */
        Vector: number[];
    }[];
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
