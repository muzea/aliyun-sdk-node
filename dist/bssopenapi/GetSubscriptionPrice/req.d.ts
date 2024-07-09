export interface GetSubscriptionPriceRequest {
    /**
     * 服务时长单位。取值范围：
     * - Year：年。
     * - Month：月。
     * @example `Year`
     */
    "ServicePeriodUnit"?: string;
    /**
     * 订阅类型。取值类型：Subscription（预付费）。
     * @example `Subscription`
     */
    "SubscriptionType": string;
    /**
     * 产品代码。
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 订单类型。取值范围：
     * - NewOrder：新购。
     * - Renewal：续费。
     * - Upgrade：升级。
     * @example `NewOrder`
     */
    "OrderType": string;
    /**
     * 服务时长。
     * @example `1`
     */
    "ServicePeriodQuantity"?: number;
    /**
     * 产品类型，是否必输以具体产品的询价文档为准。
     * @example `ecs`
     */
    "ProductType"?: string;
    /**
     * 实例所属的Region ID（地域ID）。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 指定询价的实例 ID，升级场景必须设置，用于获取实例升级前配置。
     * @example `i-khkjhxxxxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 数量。
     * @example `1`
     */
    "Quantity"?: number;
    /**
     * 计价模块列表。
     */
    "ModuleList": {
        /**
         * 仅在订单类型为Upgrade（升级）时需要，表示此次询价模块变更状态。
         * 取值范围：
         * - 1：新增。
         * - 2：变更，升级场景如果计价模块的配置发生变化需要显示指定此状态值。
         * 默认值：1。
         * @example `1`
         */
        ModuleStatus: number;
        /**
         * 第n个计价模块的模块标识。
         * @example `PackageCode`
         */
        ModuleCode: string;
        /**
         * 仅在某些产品的升级变配中需要，代表指定资源的标识。例如：对于磁盘的变配，用Tag标识具体磁盘对应的Id。
         * @example `213213123`
         */
        Tag: string;
        /**
         * 第n个计价模块的配置，n的取值范围为（1~50），格式：“AA:aa,BB:bb”，其中AA,BB分别为计价模块属性标识，aa,bb分别为计价模块属性的属性值。
         * @example `PackageCode:version_1`
         */
        Config: string;
    }[];
}
