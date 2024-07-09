export interface SetClusterADDomainRequest {
    /**
     * 集群ID。
     * @example `gws-rhzlyl5zx3ua****`
     */
    "ClusterId": string;
    /**
     * AD域的DNS IP。
     * @example `192.168.XX.XX`
     */
    "DomainDnsIp": string;
    /**
     * AD域的域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * AD域的管理员密码。
     * @example `password***`
     */
    "DomainPassword": string;
    /**
     * AD域的管理员密码。
     * @example `administrator`
     */
    "DomainAdmin"?: string;
    /**
     * 是否建立集群和AD域的关联。取值范围：
     * * false：建立集群与AD域的关联。
     * * true：取消集群与AD域的关联。
     * 默认为false。
     * > 建立集群域AD域的关联前，需要先通过智能接入网关、专线等方式打通AD域与云桌面VPC之间的网络。
     * @example `false`
     */
    "DomainDelete"?: boolean;
}
