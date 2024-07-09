export interface DescribeDomainAdvanceConfigsResponse {
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19160D5EB0`
     */
    RequestId: string;
    /**
     * 域名的详细配置信息。
     */
    DomainConfigs: {
        /**
         * 域名。
         * @example `www.aliyundoc.com`
         */
        Domain: string;
        /**
         * 域名配置。
         */
        Profile: {
            /**
             * HTTP 2.0端口列表。
             */
            Http2Port: number[];
            /**
             * 是否开启IPv6安全防护。取值：
             * - **0**：表示关闭。
             * - **1**：表示开启。
             * @example `1`
             */
            Ipv6Status: number;
            /**
             * HTTP端口列表。
             */
            HttpPort: number[];
            /**
             * 是否启用智能负载均衡。取值：
             * - **off**：表示否。
             * - **on**：表示是。
             * @example `on`
             */
            GSLBStatus: string;
            /**
             * 源站服务器地址列表。
             * @example `["39.XX.XX.197"]`
             */
            Rs: string[];
            /**
             * 当前使用的WAF实例IP（或WAF虚拟集群IP）的服务状态。取值：
             * - **0**：表示正常。
             * - **1**：表示正在进行流量清洗。
             * - **2**：表示处于黑洞状态。
             * @example `0`
             */
            VipServiceStatus: number;
            /**
             * WAF实例的集群类别。取值：
             * - **0**（默认）：表示物理集群。
             * - **1**：表示虚拟集群，即WAF独享集群。
             * @example `0`
             */
            ClusterType: number;
            /**
             * 是否使用独享IP。取值：
             * - **0**：表示否。
             * - **1**：表示是。
             * @example `0`
             */
            ExclusiveVipStatus: number;
            /**
             * WAF实例为该域名配置分配的CNAME地址。
             * @example `****dsbpkt75zeiok5mta2j5l7hggcrm.****.com`
             */
            Cname: string;
            /**
             * 证书状态（即HTTPS协议状态）。取值：
             * - **0**：表示异常，例如，未上传证书、上传的证书无效。
             * - **1**：表示正常，已上传证书且证书有效。
             * @example `1`
             */
            CertStatus: number;
            /**
             * HTTPS端口列表。
             */
            HttpsPort: number[];
            /**
             * CNAME解析记录类型。取值：
             * - **-1**：表示指向源站服务器。
             * - **0**：表示指向WAF实例IP。
             * - **1**：表示指向WAF虚拟集群IP。
             * @example `0`
             */
            ResolvedType: number;
        };
    }[];
}
