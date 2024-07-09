export interface DeleteCollectionDataRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 命名空间，默认为public。
     * > 您可以通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 集合名。
     * > 您可以[ListCollections](~~2401503~~)接口查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间对应的密码。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 要删除的数据字段和值。为字典格式的JSON字符串，其中key为字段名，value为要删除的数据值列表。
     * @example `{"title":["a","b"]}`
     */
    "CollectionData"?: string;
    /**
     * 要删除的数据过滤条件。格式为SQL WHERE语法。
     * @example `a < 10`
     */
    "CollectionDataFilter"?: string;
}
