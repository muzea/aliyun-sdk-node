export interface UpdateInstanceIpWhiteListRequest {
    /**
     * 实例ID，可调用[GetLindormInstanceList](~~426069~~)接口获取。
     * @example `ld-bp1z3506imz2f****`
     */
    "InstanceId": string;
    /**
     * 需要设置的白名单IP地址。
     * > 127.0.0.1表示禁止所有地址访问，例如192.168.0.0/24表示允许所有192.168.0.X的IP地址访问该Lindorm实例。多个白名单用半角逗号（,）分隔。
     * @example `192.168.0.X/24`
     */
    "SecurityIpList": string;
    /**
     * 白名单分组名称，不填默认为”user“。
     * @example `test_group`
     */
    "GroupName"?: string;
    /**
     * 是否清空白名单。
     * @example `false`
     */
    "Delete"?: boolean;
}
