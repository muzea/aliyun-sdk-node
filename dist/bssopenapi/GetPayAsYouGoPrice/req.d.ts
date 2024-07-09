export interface GetPayAsYouGoPriceRequest {
    /**
     * 产品代码。
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 产品类型。
     * @example `ecs`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。取值类型：PayAsYouGo（后付费）。
     * @example `PayAsYouGo`
     */
    "SubscriptionType": string;
    /**
     * 实例所属的 Region ID。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 计价模块列表。
     */
    "ModuleList": {
        /**
         * 第n个计价模块的模块标识。
         * > 可通过[DescribePricingModule](~~96469~~)接口获取Module参数。
         * @example `InstanceType`
         */
        ModuleCode: string;
        /**
         * 第n个计价模块的价格类型，取值范围：
         * - Hour：小时价。
         * - Usage：使用量。
         * - Month：月价。
         * - Year：年价。
         * > 可通过[DescribePricingModule](~~96469~~)接口获取Module参数。
         * @example `Hour`
         */
        PriceType: string;
        /**
         * 第n个计价模块的配置，n的取值范围为（1~50），格式：“AA:aa,BB:bb”，其中AA,BB分别为计价模块属性标识，aa,bb分别为计价模块属性的属性值。
         * > 可通过[DescribePricingModule](~~96469~~)接口获取Module参数。
         * @example `InstanceType:ecs.g5.xlarge,IoOptimized:IoOptimized,ImageOs:linux`
         */
        Config: string;
    }[];
}
