export interface ModifyPrepayInstanceSpecRequest {
    /**
     * 地域。
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 订单实例ID。
     * @example `f-cn-wwo36qj4g06`
     */
    "InstanceId": string;
    /**
     * 资源规格信息。
     */
    "ResourceSpec": {
        /**
         * CPU数量。
         * @example `1`
         */
        Cpu: number;
        /**
         * 内存大小。
         * > 内存大小必须为CPU数量的4倍。
         * @example `4`
         */
        MemoryGB: number;
    };
    "Ha"?: boolean;
    "HaZoneId"?: string;
    "HaVSwitchIds"?: string[];
    "HaResourceSpec"?: {
        Cpu: number;
        MemoryGB: number;
    };
}
