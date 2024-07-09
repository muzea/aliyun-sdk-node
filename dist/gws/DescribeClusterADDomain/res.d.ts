export interface DescribeClusterADDomainResponse {
    /**
     * 请求ID。
     * @example `7FCC0CD3-53C2-508E-9E1C-39BF14F0E75A`
     */
    RequestId: string;
    /**
     * 集群是否支持关联AD域。
     * * true：支持。
     * * false：不支持。
     * > 只有gws.s1.advanced集群支持关联AD域。
     * @example `true`
     */
    IsSupported: boolean;
    /**
     * 当前查询命令的运行状态。可能值：
     * * false：未完成。
     * * true：已完成。
     * @example `true`
     */
    TaskFinished: boolean;
    /**
     * AD域的DNS IP。
     * @example `192.168.XX.XX`
     */
    DomainDnsIp: string;
    /**
     * 任务ID。
     * @example `t-xxx`
     */
    TaskId: string;
    /**
     * AD域的域名。
     * @example `example.com`
     */
    DomainName: string;
}
