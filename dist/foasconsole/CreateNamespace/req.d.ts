export interface CreateNamespaceRequest {
    /**
     * 地域。
     * @example `cn-shenzhen`
     */
    "Region": string;
    /**
     * 订单实例ID。
     * @example `f-cn-wwo36qj4g06`
     */
    "InstanceId": string;
    /**
     * namespace名称。
     * @example `di-593440390152545`
     */
    "Namespace": string;
    /**
     * 资源规格。
     */
    "ResourceSpec"?: {
        /**
         * CPU数量。
         * @example `30`
         */
        Cpu: number;
        /**
         * 内存大小。单位为GB。
         * > 内存数量必须为CPU数量的4倍。
         * @example `120`
         */
        MemoryGB: number;
    };
    "Ha"?: boolean;
}
