export interface CreateSecurityIpGroupRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * IP 白名单分组中的 IP 地址或地址段。
     * 其为一个 JSON 格式的数组，数组中每个对象为一个 IP 字符串或者 IP 段，支持如下两种格式：
     * - IP 地址形式，例如：["10.23.12.24"]。
     * - CIDR 形式，例如：["10.23.12.24/24"]（无类域间路由，24 表示地址中前缀的长度，长度范围为 1~30）。 限制：单个白名单分组支持最多 40 个地址或地址段，所有白名单分组累计支持 200 个。
     * @example `["192.168.1.1","192.168.0.0.1/8"]`
     */
    "SecurityIps": string;
    /**
     * 白名单分组名称。
     * @example `pay_online`
     */
    "SecurityIpGroupName": string;
}
