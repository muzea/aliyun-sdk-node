export interface ModifyPrepayNamespaceSpecRequest {
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
     * 项目空间名称。
     * @example `di-593440219799842`
     */
    "Namespace": string;
    /**
     * 项目空间资源详情
     */
    "ResourceSpec": {
        /**
         * CPU数量。
         * @example `1`
         */
        Cpu: number;
        /**
         * 内存大小。单位：GB。
         * > 内存大小必须为CPU数量大小的4倍。
         * @example `4`
         */
        MemoryGB: number;
    };
}
