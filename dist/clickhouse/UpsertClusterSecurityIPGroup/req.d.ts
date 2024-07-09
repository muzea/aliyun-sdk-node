export interface UpsertClusterSecurityIPGroupRequest {
    /**
     * 白名单分组名称。
     * @example `test`
     */
    "GroupName": string;
    /**
     * IP地址，支持如下两种格式：
     * - IP地址形式，例如192.168.0.1表示允许此IP地址访问云数据库ClickHouse。
     * - IP段形式：例如192.168.0.0/24表示允许从192.168.0.1到192.168.0.255的IP地址访问云数据库ClickHouse。
     * >- 禁止输入IP: 0.0.0.0。
     * - 设置为127.0.0.1代表禁止所有地址访问。
     * @example `192.168.xx.xx`
     */
    "SecurityIps": string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
