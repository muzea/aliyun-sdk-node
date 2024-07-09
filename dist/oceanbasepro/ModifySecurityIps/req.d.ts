export interface ModifySecurityIpsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * IP 安全白名单列表。
     * 其为一个 JSON 格式的数组，数组中每个对象为一个 IP 字符串或者 IP 段。最多可设置 40 个。
     * @example `["192.168.0.0/20", "192.169.1.1"]`
     */
    "SecurityIps"?: string;
    /**
     * IP 安全白名单组的组名。
     * 由小写英文字符开头，由小写英文字符或者数字结尾，只能包含小写英文字符，数字和下划线，长度在 2-32 个字符之间。
     * @example `paytest`
     */
    "SecurityIpGroupName"?: string;
}
