export interface ModifyTunnelAttributeResponse {
    /**
     * 隧道ID。
     * @example `tun-gbyz2e070xzo93****`
     */
    TunnelId: string;
    /**
     * 请求ID。
     * @example `E6F36FF0-9544-3AEE-8673-A4647D50064C`
     */
    RequestId: string;
    /**
     * 隧道IKE阶段（第一阶段）配置。
     */
    TunnelIkeConfig: {
        /**
         * IKE认证算法。
         * @example `sha1`
         */
        IkeAuthAlg: string;
        /**
         * IKE加密算法。
         * @example `aes`
         */
        IkeEncAlg: string;
        /**
         * IKE生存时间。单位：秒。
         * @example `86400`
         */
        IkeLifetime: number;
        /**
         * IKE协商模式。
         * - **main**：主模式，协商过程安全性高。
         * - **aggressive**：野蛮模式，协商快速且协商成功率高。
         * @example `main`
         */
        IkeMode: string;
        /**
         * DH分组。
         * @example `group2`
         */
        IkePfs: string;
        /**
         * IKE协议版本。
         * - **ikev1**
         * - **ikev2**
         * 相对于IKEv1版本，IKEv2版本简化了SA的协商过程并且对于多网段的场景提供了更好的支持。
         * @example `ikev2`
         */
        IkeVersion: string;
        /**
         * 隧道本端的标识。支持FQDN和IP格式，默认值为当前隧道的IP地址。
         * @example `47.XX.XX.87`
         */
        LocalId: string;
        /**
         * 预共享密钥。
         * @example `123456****`
         */
        Psk: string;
        /**
         * 隧道对端的标识。支持FQDN和IP格式，默认值为隧道关联的用户网关实例的IP地址。
         * @example `47.XX.XX.207`
         */
        RemoteId: string;
    };
    /**
     * 隧道IPsec阶段（第二阶段）的配置。
     */
    TunnelIpsecConfig: {
        /**
         * IPsec认证算法。
         * @example `sha1`
         */
        IpsecAuthAlg: string;
        /**
         * IPsec加密算法。
         * @example `aes`
         */
        IpsecEncAlg: string;
        /**
         * IPsec生存时间。单位：秒。
         * @example `86400`
         */
        IpsecLifetime: number;
        /**
         * DH分组。
         * @example `group2`
         */
        IpsecPfs: string;
    };
    /**
     * 隧道的BGP配置信息。
     */
    TunnelBgpConfig: {
        /**
         * BGP的开启状态。
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `true`
         */
        EnableBgp: boolean;
        /**
         * 隧道本端的自治系统号。
         * @example `65530`
         */
        LocalAsn: number;
        /**
         * 隧道本端的BGP IP地址。
         * @example `169.254.11.1`
         */
        LocalBgpIp: string;
        /**
         * 隧道对端的自治系统号。
         * @example `65531`
         */
        PeerAsn: number;
        /**
         * 隧道对端的BGP IP地址。
         * @example `169.254.11.2`
         */
        PeerBgpIp: string;
        /**
         * 隧道BGP IP地址所属网段。
         * @example `169.254.11.0/30`
         */
        TunnelCidr: string;
    };
    /**
     * 是否已开启NAT穿越功能。取值：
     * - **false**：未开启。
     * - **true**：已开启。
     * @example `true`
     */
    EnableNatTraversal: boolean;
    /**
     * 是否已开启DPD（对等体存活检测）功能。
     * - **false**：未开启。
     * - **true**：已开启。
     * @example `true`
     */
    EnableDpd: boolean;
    /**
     * 国密型VPN网关创建IPsec连接时，对端的CA证书。
     * @example `-----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----`
     */
    RemoteCaCertificate: string;
    /**
     * 隧道关联的用户网关实例ID。
     * @example `cgw-p0wx48ayhrygitm80****`
     */
    CustomerGatewayId: string;
    /**
     * 隧道的角色。
     * - **master**：表示主隧道。
     * - **slave**：表示备隧道。
     * @example `master`
     */
    Role: string;
    /**
     * 隧道所属的可用区。
     * @example `cn-hangzhou-h`
     */
    ZoneNo: string;
    /**
     * 隧道的IP地址。
     * @example `47.XX.XX.87`
     */
    InternetIp: string;
    /**
     * 隧道的状态。
     * - **active**：表示隧道状态可用。
     * - **updating**：表示隧道正在更新中。
     * - **deleting**：表示隧道正在删除中。
     * @example `active`
     */
    State: string;
}
