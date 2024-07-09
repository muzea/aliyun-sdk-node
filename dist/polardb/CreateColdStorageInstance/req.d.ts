export interface CreateColdStorageInstanceRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID。
     * >您可以通过[describedbclusters](~~98094~~)接口查看账号下所有集群的详细信息（如集群ID）。
     * @example `pc-wz9ye3xrtj60ua6d1`
     */
    "DBClusterId": string;
    /**
     * 冷存储实例的描述。长度为不超过256个字符。
     * @example `xxxxxxxxx`
     */
    "ColdStorageInstanceDescription"?: string;
    /**
     * 该参数用于保证请求的幂等性。由客户端生成该参数值，保证在不同请求间该参数值的唯一性。该参数区分大小写、长度不超过64个ASCII字符。
     * @example `6000170000591aed949d0f5********************`
     */
    "ClientToken"?: string;
}
