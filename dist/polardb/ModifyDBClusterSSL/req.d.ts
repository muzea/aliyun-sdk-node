export interface ModifyDBClusterSSLRequest {
    /**
     * 集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
    /**
     * 修改SSL状态，取值：
     * * **Disable**：关闭SSL加密。
     * * **Enable**：开启SSL加密。
     * * **Update**：更新CA证书。
     * > 开启SSL加密或更新CA证书后，需要下载和配置证书，详情请参见[设置SSL加密](~~153182~~)。
     * @example `Enable`
     */
    "SSLEnabled"?: string;
    /**
     * 连接地址ID。
     * >* 若目标集群为PolarDB MySQL版，该参数必填。
     * >* 若目标集群为PolarDB PostgreSQL版或PolarDB PostgreSQL版（兼容Oracle），无需传入该参数，默认所有地址开启SSL加密。
     * >* 可以通过[DescribeDBClusterSSL](~~153414~~)接口查看连接地址详情。
     * @example `pe-******************`
     */
    "DBEndpointId"?: string;
    /**
     * 连接地址的网络类型，需要与**DBEndpointId**参数传入的连接地址的网络类型保持一致，取值：
     * * **Public**：公网
     * * **Private**：私网
     * * **Inner**：私网（经典网络）
     * >* 若目标集群为PolarDB MySQL版，该参数必填。
     * >* 若目标集群为PolarDB PostgreSQL版或PolarDB PostgreSQL版（兼容Oracle），无需传入该参数，默认所有地址开启SSL加密。
     * @example `Public`
     */
    "NetType"?: string;
    /**
     * 是否开启SSL证书自动轮转，取值：
     * - **Enable**：开启
     * - **Disable**：关闭
     * @example `Enable`
     */
    "SSLAutoRotate"?: string;
}
