export interface UpdateCollectionDataMetadataRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-j788ghhjjxxxx`
     */
    "DBInstanceId": string;
    /**
     * 命名空间。
     * > 您可以通过[ListNamespaces](~~2401502~~)接口查看列表。
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
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间对应的密码。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 要更新的数据的过滤条件，格式为SQL的WHERE格式。此字段不能和Ids字段同时为空。
     * @example `business_value = 'chat_file_1'`
     */
    "Filter"?: string;
    /**
     * 要更新的数据的Id列表，即上传数据时指定的Row.Id。此字段不能和Filter字段同时为空。
     */
    "Ids"?: string[];
    /**
     * 需要更新的数据，为MAP格式的JSON字符串。其中key是字段名，value是新的数据取值。
     * @example `{
          "title": "new title",
          "content": "new content"
    }`
     */
    "Metadata": any;
}
