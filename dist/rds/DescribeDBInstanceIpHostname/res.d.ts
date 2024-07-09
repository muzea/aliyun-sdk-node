export interface DescribeDBInstanceIpHostnameResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `67CD4719-51E3-4A76-A38C-02F45FAE7E36`
     */
    RequestId: string;
    /**
     * RDS实例所在ECS实例的内网IP和ECS主机名，包含主备实例。格式为：`ip1,hostname1;ip2,hostname2`。
     * @example `172.16.xx.xx,sd****B;172.16.xx.xx,sd****A`
     */
    IpHostnameInfos: string;
}
