export interface QueryModifyInstancePriceRequest {
    /**
     * 地域id
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 订单实例ID
     * @example `f-cn-wwo36qj4g06`
     */
    "InstanceId": string;
    /**
     * 资源规格。
     */
    "ResourceSpec": {
        /**
         * 变配后CPU数量。
         * @example `10`
         */
        Cpu: number;
        /**
         * 变配后内存大小。
         * >内存大小必须为CPU数量的4倍。
         * @example `40`
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
