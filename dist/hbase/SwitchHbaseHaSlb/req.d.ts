export interface SwitchHbaseHaSlbRequest {
    /**
     * BDS集群ID
     * @example `bds-t4n3496whj23ia4k`
     */
    "BdsId": string;
    /**
     * bds高可用管理里的高可用Id
     * @example `ha-v21tmnxjwh2yuy1il`
     */
    "HaId": string;
    /**
     * 高可用类型。可选值
     * 1. thrift
     * 2. phoenix
     * @example `thrift`
     */
    "HaTypes": string;
    /**
     * 高可用切换到主实例还是备实例。可选值
     * 1. Active 切换到主实例
     * 2. Standby 切换到备实例
     * @example `Active`
     */
    "HbaseType": string;
}
