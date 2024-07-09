export interface DescribeSslVpnClientCertResponse {
    /**
     * SSL客户端证书的状态。
     * - **expiring-soon**：证书将在1周后过期。
     * - **normal**：正常。
     * - **expired**：已过期。
     * @example `normal`
     */
    Status: string;
    /**
     * SSL客户端证书的创建时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建SSL客户端证书时的总时长。
     * @example `1552550980000`
     */
    CreateTime: number;
    /**
     * 客户端密钥。
     * @example `-----BEGIN RSA PRIVATE KEY-----
    MIIEpAI****ZzNFhuM/za==
    -----END RSA PRIVATE KEY-----`
     */
    ClientKey: string;
    /**
     * SSL客户端证书所在的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 客户端配置。
     * @example `client
    dev tun
    proto tcp
    remote 120.XX.XX.33 1194
    resolv-retry infinite
    nobind
    persist-key
    persist-tun
    ca ca.crt
    cert vsc-bp15t7****.crt
    key vsc-bp15t7****.key
    cipher AES-128-CBC
    ;comp-lzo
    verb 4`
     */
    ClientConfig: string;
    /**
     * SSL客户端证书的到期时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至SSL客户端证书到期时的总时长。
     * @example `1647158980000`
     */
    EndTime: number;
    /**
     * 请求ID。
     * @example `5BE01CD7-5A50-472D-AC14-CA181C5C03BE`
     */
    RequestId: string;
    /**
     * 客户端证书。
     * @example `-----BEGIN CERTIFICATE-----
    MIIDR****A==
    -----END CERTIFICATE-----`
     */
    ClientCert: string;
    /**
     * CA证书。
     * @example `-----BEGIN CERTIFICATE-----
    MIID****r4w=
    -----END CERTIFICATE-----`
     */
    CaCert: string;
    /**
     * SSL客户端证书的ID。
     * @example `vsc-bp13k5mp4tg8v3z9b****`
     */
    SslVpnClientCertId: string;
    /**
     * SSL服务端ID。
     * @example `vss-bp155e9yclsg1xgq4****`
     */
    SslVpnServerId: string;
    /**
     * SSL客户端证书的名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * SSL客户端证书所属的资源组ID。
     * SSL客户端证书与其关联的SSL服务端的资源组相同。您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
}
