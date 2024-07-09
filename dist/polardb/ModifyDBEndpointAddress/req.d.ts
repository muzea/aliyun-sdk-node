export interface ModifyDBEndpointAddressRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-***************`
     */
    "DBClusterId": string;
    /**
     * 连接地址ID。
     * > 您可以通过接口[DescribeDBClusterEndpoints](~~98205~~)查询连接地址ID。
     * @example `pe-****************`
     */
    "DBEndpointId": string;
    /**
     * 连接地址的网络类型，取值范围如下：
     * * **Public**：公网
     * * **Private**：私网
     * <props="china">- **Inner**：经典网络</props>
     * <props="china">仅PolarDB MySQL版集群支持经典网络类型。</props>
     * @example `Public`
     */
    "NetType": string;
    /**
     * 新的连接地址前缀，需满足如下条件：
     * * 由小写字母、数字、中划线（-）组成。
     * * 以字母开头，以数字或字母结尾。
     * * 长度为6~30个字符。
     * @example `example`
     */
    "ConnectionStringPrefix"?: string;
    /**
     * 私有域名前缀。需满足如下条件：
     * * 由小写字母、数字、中划线（-）组成。
     * * 以字母开头，以数字或字母结尾。
     * * 长度为6~30个字符。
     * > * 对于PolarDB的每一个私网地址，均可以绑定一个用户的私有域名，该域名仅在当前地域内指定的VPC中生效。私有域名实际上是通过PrivateZone管理的，通过CNAME映射到PolarDB自带的私网地址上，该功能PrivateZone会收取少量费用，请参见[产品定价](~~71338~~)。
     * > * 仅**NetType=Private**时该参数有意义。
     * @example `aliyundoc`
     */
    "PrivateZoneAddressPrefix"?: string;
    /**
     * 私有域名Zone名称。
     * > 仅**NetType=Private**时该参数有意义。
     * @example `aliyundoc.com`
     */
    "PrivateZoneName"?: string;
    /**
     * 端口号，取值范围为3000～5999。
     * > * 仅PolarDB MySQL版集群支持该参数，若该参数留空，则默认端口号为3306。
     * @example `3306`
     */
    "Port"?: string;
}
