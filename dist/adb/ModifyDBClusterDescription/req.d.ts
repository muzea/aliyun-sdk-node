export interface ModifyDBClusterDescriptionRequest {
    /**
     * 集群ID。
     * @example `am-bp11q28kvl688****`
     */
    "DBClusterId": string;
    /**
     * 集群描述。
     * - 不能以`http://`或者`https`开头；
     * - 长度为2~256个字符。
     * @example `adb_test`
     */
    "DBClusterDescription": string;
}
