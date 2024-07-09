export interface ModifyDBClusterDescriptionRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 集群名称，集群名称需满足如下要求：
     * - 不能以`http://`或`https://`开头。
     * - 长度为2~256个字符。
     * @example `ClusterDescriptionTest`
     */
    "DBClusterDescription": string;
}
