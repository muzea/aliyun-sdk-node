export interface DownloadVpnConnectionConfigResponse {
    /**
     * 请求ID。
     * @example `0C68048B-0F70-40DA-B8AE-1B79B5CF62E3`
     */
    RequestId: string;
    /**
     * IPsec连接对端网关设备的配置信息。
     */
    VpnConnectionConfig: {
        /**
         * VPN网关的标识。
         * @example `116.62.XX.XX`
         */
        Remote: string;
        /**
         * 用户网关的标识。
         * @example `139.196.XX.XX`
         */
        Local: string;
        /**
         * VPC侧的网段。
         * @example `192.168.0.0/16`
         */
        RemoteSubnet: string;
        /**
         * 本地IDC侧的网段。
         * @example `10.0.0.0/8`
         */
        LocalSubnet: string;
        /**
         * 第一阶段协商的配置信息。
         */
        IkeConfig: {
            /**
             * VPN网关的标识。支持FQDN和IP格式，默认为VPN网关的IP地址。
             * @example `116.62.XX.XX`
             */
            RemoteId: string;
            /**
             * IKE阶段生存时间。单位：秒。
             * @example `86400`
             */
            IkeLifetime: number;
            /**
             * IKE阶段加密算法。
             * @example `aes`
             */
            IkeEncAlg: string;
            /**
             * 用户网关的标识。支持FQDN和IP格式，默认为用户网关的IP地址。
             * @example `139.196.XX.XX`
             */
            LocalId: string;
            /**
             * IKE协商模式。
             * - **main**：主模式，协商过程安全性高。
             * - **aggressive**：野蛮模式，协商快速且协商成功率高。
             * @example `main`
             */
            IkeMode: string;
            /**
             * IKE协议的版本。
             * @example `ikev1`
             */
            IkeVersion: string;
            /**
             * IKE阶段DH分组。
             * @example `group2`
             */
            IkePfs: string;
            /**
             * 预共享密钥。
             * @example `pgw6dy7d1i8i****`
             */
            Psk: string;
            /**
             * IKE阶段认证算法。
             * @example `sha1`
             */
            IkeAuthAlg: string;
        };
        /**
         * 第二阶段协商的配置信息。
         */
        IpsecConfig: {
            /**
             * IPsec阶段认证算法。
             * @example `sha1`
             */
            IpsecAuthAlg: string;
            /**
             * IPsec阶段加密算法。
             * @example `aes`
             */
            IpsecEncAlg: string;
            /**
             * IPsec阶段生存时间。单位：秒。
             * @example `86400`
             */
            IpsecLifetime: number;
            /**
             * IPsec阶段DH分组。
             * @example `group2`
             */
            IpsecPfs: string;
        };
        TunnelsConfig: {
            /**
             * IPsec连接对端网关设备的隧道配置信息。
             * 仅双隧道模式的IPsec连接会返回**TunnelsConfig**数组下的参数。
             */
            TunnelConfig: {
                /**
                 * 隧道ID。
                 * @example `tun-opsqc4d97wni27****`
                 */
                TunnelId: string;
                /**
                 * 本地IDC侧隧道的标识。
                 * @example `47.21.XX.XX`
                 */
                Local: string;
                /**
                 * 阿里云侧隧道的标识。
                 * @example `47.24.XX.XX`
                 */
                Remote: string;
                /**
                 * 第一阶段协商的配置信息。
                 */
                IkeConfig: {
                    /**
                     * 预共享密钥。
                     * @example `pgw6dy7d1i8i****`
                     */
                    Psk: string;
                    /**
                     * IKE协议的版本。
                     * @example `ikev1`
                     */
                    IkeVersion: string;
                    /**
                     * IKE协商模式。
                     * - **main**：主模式，协商过程安全性高。
                     * - **aggressive**：野蛮模式，协商快速且协商成功率高。
                     * @example `main`
                     */
                    IkeMode: string;
                    /**
                     * IKE阶段加密算法。
                     * @example `aes`
                     */
                    IkeEncAlg: string;
                    /**
                     * IKE阶段认证算法。
                     * @example `sha1`
                     */
                    IkeAuthAlg: string;
                    /**
                     * IKE阶段DH分组。
                     * @example `group2`
                     */
                    IkePfs: string;
                    /**
                     * IKE阶段生存时间。单位：秒。
                     * @example `86400`
                     */
                    IkeLifetime: number;
                    /**
                     * 本地IDC侧隧道的标识。
                     * @example `47.21.XX.XX`
                     */
                    LocalId: string;
                    /**
                     * 阿里云侧隧道的标识。
                     * @example `47.24.XX.XX`
                     */
                    RemoteId: string;
                };
                /**
                 * 第二阶段协商的配置信息。
                 */
                IpsecConfig: {
                    /**
                     * IPsec阶段认证算法。
                     * @example `sha1`
                     */
                    IpsecAuthAlg: string;
                    /**
                     * IPsec阶段加密算法。
                     * @example `aes`
                     */
                    IpsecEncAlg: string;
                    /**
                     * IPsec阶段DH分组。
                     * @example `group2`
                     */
                    IpsecPfs: string;
                    /**
                     * IPsec阶段生存时间。单位：秒。
                     * @example `86400`
                     */
                    IpsecLifetime: number;
                };
            }[];
        };
    };
}
