export interface CreateHbaseHaSlbRequest {
    /**
     * BDS集群ID。
     * @example `bds-t4n3496whj23****`
     */
    "BdsId": string;
    /**
     * BDS主备双活管理中的高可用ID。
     * @example `ha-v21tmnxjwh2yu****`
     */
    "HaId": string;
    /**
     * 高可用类型，取值：
     * - thrift
     * - phoenix
     * @example `thrift`
     */
    "HaTypes": string;
    /**
     * 高可用类型在主实例或者备实例。取值：
     * - Active：高可用类型在主实例。
     * - Standby：高可用类型在备实例。
     * @example `Active`
     */
    "HbaseType": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
}
