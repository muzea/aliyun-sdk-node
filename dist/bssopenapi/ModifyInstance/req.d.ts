export interface ModifyInstanceRequest {
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode": string;
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 付费类型，取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType": string;
    /**
     * 变配类型，取值
     * - Upgrade：升级。
     * - Downgrade：降级。
     * @example `Upgrade`
     */
    "ModifyType": string;
    /**
     * 变更配置的实例ID。
     * @example `rm-akjhkdsjhfskjfhd`
     */
    "InstanceId"?: string;
    /**
     * 用于保证请求的幂等性，防止请求重复提交。
     * @example `JAKSJFHFAKJSF`
     */
    "ClientToken"?: string;
    /**
     * 参数列表。
     */
    "Parameter"?: {
        /**
         * 第n个模块属性value配置，n的取值范围为（1~100）。
         * @example `test`
         */
        Value: string;
        /**
         * 第n个模块属性code配置，n的取值范围为（1~100），如有多个模块属性参数，按照n=1,2,3…n的形式拼接多个参数。
         * > 只设置需要变更配置的模块属性信息，如A,B两个属性中，只有A需要变更配置，则只传A属性相关即可。
         * @example `test`
         */
        Code: string;
    }[];
}
