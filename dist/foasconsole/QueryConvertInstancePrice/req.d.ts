export interface QueryConvertInstancePriceRequest {
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
     * 订购周期，仅支持按年（Year）和月（Month）订购。
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
         * 项目空间名称。
         * @example `lm-test-default`
         */
        Namespace: string;
        /**
         * 项目空间资源规格。
         */
        ResourceSpec: {
            /**
             * CPU数量。
             * @example `6`
             */
            Cpu: number;
            /**
             * 内存大小。单位：GB。
             * > 内存大小必须为CPU数量大小的4倍。
             * @example `24`
             */
            MemoryGB: number;
        };
    }[];
}
