export interface DescribeWebRulesResponse {
    /**
     * 查询到的网站业务转发规则的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0F5B72DD-96F4-423A-B12B-A5151DD746B8`
     */
    RequestId: string;
    /**
     * 网站业务转发规则的配置。
     */
    WebRules: {
        /**
         * 网站域名。
         * @example `example.com`
         */
        Domain: string;
        /**
         * 是否开启了HTTPS强制跳转功能。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        Http2HttpsEnable: boolean;
        /**
         * 支持的TLS协议版本。取值：
         * - **tls1.0**：表示支持TLS 1.0及以上版本。
         * - **tls1.1**：表示支持TLS 1.1及以上版本。
         * - **tls1.2**：表示支持TLS 1.2及以上版本。
         * @example `tls1.1`
         */
        SslProtocols: string;
        /**
         * 域名受到违规处罚的原因。取值：
         * - **1**：表示域名未履行ICP备案。
         * - **2**：表示域名经营的业务不符合监管要求。
         * 如果同时包含原因**1**和**2**，该参数返回**2**。
         * @example `1`
         */
        PunishReason: number;
        /**
         * 频率控制防护（CC防护）的模式。取值：
         * - **default**：表示正常模式。
         * - **gf_under_attack**：表示攻击紧急模式。
         * - **gf_sos_verify**：表示严格模式。
         * - **gf_sos_enhance**：表示超级严格模式。
         * @example `default`
         */
        CcTemplate: string;
        /**
         * 是否开启了频率控制防护（CC防护）。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        CcEnabled: boolean;
        /**
         * 加密套件的类型。取值：
         * - **default**：表示自定义加密套件。
         * - **all**：表示全部加密套件，包含强加密套件和弱加密套件。
         * - **strong**：表示强加密套件。
         * @example `default`
         */
        SslCiphers: string;
        /**
         * 是否开启了TLS 1.3协议支持。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        Ssl13Enabled: boolean;
        /**
         * 是否开启了自定义频率控制防护（CC防护）。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        CcRuleEnabled: boolean;
        /**
         * 是否启用了OCSP（Online Certificate Status Protocol）功能。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        OcspEnabled: boolean;
        /**
         * 域名是否受到违规处罚。取值：
         * - **true**：表示已受到违规处罚。您可以通过**PunishReason**查看受到违规处罚的具体原因。
         * - **false**：表示未受到违规处罚。
         * @example `true`
         */
        PunishStatus: boolean;
        /**
         * 网站业务转发是否开启。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        ProxyEnabled: boolean;
        /**
         * 证书名称。
         * @example `testcert`
         */
        CertName: string;
        /**
         * 回源负载算法的类型。取值：
         * - **ip_hash**：表示IP Hash算法。根据请求来源IP进行HASH映射，将同一个IP的所有请求定向到一个源站服务器。
         * - **rr**：表示轮转算法。将所有请求轮流分配给不同源站服务器。
         * - **least_time**：表示Least Time算法。该算法通过智能DNS解析能力，保证业务流量从接入防护节点到转发回源站服务器整个链路的时延最短。
         * @example `ip_hash`
         */
        PolicyMode: string;
        /**
         * 网站域名对应的DDoS高防CNAME地址。
         * @example `kzmk7b8tt351****.aliyunddos1014****`
         */
        Cname: string;
        /**
         * 是否开启了HTTP 2.0协议支持。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        Http2Enable: boolean;
        /**
         * 是否开启了HTTP回源功能。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        Https2HttpEnable: boolean;
        /**
         * 转发协议和端口配置。
         */
        ProxyTypes: {
            /**
             * 转发协议类型。取值：
             * - **http**：表示HTTP协议。
             * - **https**：表示HTTPS协议。
             * - **websocket**：表示WebSocket协议。
             * - **websockets**：表示WebSockets协议。
             * @example `https`
             */
            ProxyType: string;
            /**
             * 端口列表。
             */
            ProxyPorts: string[];
        }[];
        /**
         * 源站服务器地址信息。
         */
        RealServers: {
            /**
             * 源站服务器地址的类型。取值：
             * - **0**：表示源站服务器的IP地址。
             * - **1**：表示源站服务器的域名地址。通常适用于源站和高防之间还部署有其他代理服务（例如WAF）的场景，具体指代理服务的跳转地址（例如WAF CNAME地址）。
             * @example `0`
             */
            RsType: number;
            /**
             * 源站服务器地址。
             * @example `192.0.XX.XX`
             */
            RealServer: string;
        }[];
        /**
         * IP白名单（针对域名）列表。
         */
        WhiteList: string[];
        /**
         * IP黑名单（针对域名）列表。
         */
        BlackList: string[];
        /**
         * 自定义加密套件列表。
         */
        CustomCiphers: string[];
        /**
         * 国密相关配置。
         */
        GmCert: {
            /**
             * 国密标准证书的ID。
             * @example `725****`
             */
            CertId: string;
            /**
             * 是否启用了国密验证功能。
             * - 0：关闭
             * - 1：开启
             * @example `1`
             */
            GmEnable: number;
            /**
             * 是否开启了仅支持国密客户端访问。
             * - 0：关闭
             * - 1：开启
             * @example `1`
             */
            GmOnly: number;
        };
        /**
         * 证书区域。取值：
         * - cn-hangzhou：中国大陆地区（默认）
         * - ap-southeast-1：非中国大陆地区。
         * @example `cn-hangzhou`
         */
        CertRegion: string;
    }[];
}
