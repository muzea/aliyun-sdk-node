export interface DescribeCenAttachedChildInstanceAttributeResponse {
    /**
     * 网络实例的加载状态。
     * - **Attaching**：加载中。
     * - **Attached**：已加载。
     * - **Detaching**：卸载中。
     * @example `Attached`
     */
    Status: string;
    /**
     * 网络实例的类型。
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * @example `VPC`
     */
    ChildInstanceType: string;
    /**
     * 网络实例所属地域ID。
     * @example `cn-beijing`
     */
    ChildInstanceRegionId: string;
    /**
     * 请求ID。
     * @example `ADD98358-D265-4060-87CB-A2427F5A8944`
     */
    RequestId: string;
    /**
     * 网络实例所属阿里云账号（主账号）ID。
     * @example `1688000000000000`
     */
    ChildInstanceOwnerId: number;
    /**
     * 网络实例ID。
     * @example `vpc-2zebdboka7d7t37vo****`
     */
    ChildInstanceId: string;
    /**
     * 云企业网实例ID。
     * @example `cen-5mv960yjhja0dh****`
     */
    CenId: string;
    /**
     * 网络实例的名称。
     * @example `defaultvpc`
     */
    ChildInstanceName: string;
    /**
     * 网络实例的加载时间。
     * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
     * @example `2018-07-30T07:53Z`
     */
    ChildInstanceAttachTime: string;
    /**
     * 网络实例的详细信息。
     */
    ChildInstanceAttributes: {
        /**
         * VPC的IPv4网段。
         * @example `192.168.0.0/16`
         */
        CidrBlock: string;
        SecondaryCidrBlocks: {
            /**
             * VPC附加网段信息。
             */
            secondaryCidrBlock: string[];
        };
        /**
         * VPC的IPv6网段。
         * @example `2408:XXXX:0:a600::/56`
         */
        Ipv6CidrBlock: string;
        Ipv6CidrBlocks: {
            /**
             * VPC的IPv6网段信息。
             */
            ipv6CidrBlock: {
                /**
                 * VPC的IPv6地址段类型。取值：
                 * - BGP（默认值）：阿里云BGP IPv6。
                 * - ChinaMobile：中国移动（单线）。
                 * - ChinaUnicom：中国联通（单线）。
                 * - ChinaTelecom：中国电信（单线）。
                 * >
                 * > 如果是开通了单线带宽白名单的用户，该字段可以为ChinaTelecom（中国电信）、ChinaUnicom（中国联通）和ChinaMobile（中国移动）。
                 * @example `BGP`
                 */
                Ipv6Isp: string;
                /**
                 * VPC的IPv6网段。
                 * @example `2408:XXXX:0:6a::/56`
                 */
                Ipv6CidrBlock: string;
            }[];
        };
    };
}
