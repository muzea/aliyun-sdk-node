export interface ConvertInstanceRequest {
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
     * 订购周期
     * @example `Month`
     */
    "PricingCycle": string;
    /**
     * 订购周期数量
     * @example `1`
     */
    "Duration": number;
    /**
     * 是否自动续费
     * @example `true`
     */
    "IsAutoRenew": boolean;
    /**
     * 项目空间资源规格。
     */
    "NamespaceResourceSpecs": {
        /**
         * namespace名称。
         * @example `ns-1`
         */
        Namespace: string;
        /**
         * 资源规格。
         */
        ResourceSpec: {
            /**
             * cpu数量。
             * @example `1`
             */
            Cpu: number;
            /**
             * 内存大小。
             * @example `4`
             */
            MemoryGB: number;
        };
    }[];
}
