export interface CreateProductOrdersRequest {
    /**
     * 购买请求
     */
    "body"?: {
        /**
         * 是否自动购买（支付）Products参数中传入的所有产品。
         * - true：自动支付。
         * - false：不自动支付。
         * @example `true`
         */
        AutoPay: boolean;
        /**
         * 需要购买的产品列表，使用逗号分割。
         */
        Products: {
            /**
             * 是否自动续费。
             * - true：自动续费。
             * - false：不自动续费。
             * @example `true`
             */
            AutoRenew: boolean;
            /**
             * 产品code，目前支持的如下code：
             * - DataWorks_share：Dataworks后付费商品。
             * - MaxCompute_share：MaxCompute后付费商品。
             * - PAI_share：PAI后付费商品。
             * - OSS_share：OSS后付费商品。
             * @example `DataWorks_share`
             */
            ProductCode: string;
            /**
             * 付费类型，目前支持POSTPAY。
             * @example `POSTPAY`
             */
            ChargeType: string;
            /**
             * 订单类型，目前只支持BUY。
             * @example `BUY`
             */
            OrderType: string;
            /**
             * 计价单位，目前支持如下值
             * - Month：按月计价，DataWorks_share只支持Month。
             * - Hour：按小时计价，OSS_share、MaxCompute_share只支持Hour。
             * @example `Month`
             */
            PricingCycle: string;
            /**
             * 购买时长，与pricingCycle配合使用，目前只支持1。
             * @example `1`
             */
            Duration: number;
            /**
             * 实例属性信息列表。
             * - DataWorks_share：
             * [ {
             * "Code": "region",
             * "Value": "cn-shanghai"
             * }
             * ]
             * - OSS_share：
             * [ {
             * "Code": "commodity_type",
             * "Value": "oss",
             * "Name": "对象存储OSS"
             * },
             * {
             * "Code": "ord_time",
             * "Value": "1:Hour",
             * "Name": "1小时"
             * }
             * ]
             * - PAI_share: 无
             * - 国内bid MaxCompute_share：
             * [
             * {
             * "Code": "region",
             * "Value": "cn-hangzhou"
             * },
             * {
             * "Code": "odps_specification_type",
             * "Value": "OdpsStandard"
             * },
             * {
             * "Code": "ord_time",
             * "Value": "1:Hour"
             * }
             * ]
             * - 国际bid MaxCompute_share：
             * [
             * {
             * "Code": "region",
             * "Value": "cn-hangzhou"
             * },
             * {
             * "Code": "ord_time",
             * "Value": "1:Hour"
             * }
             * ]
             */
            InstanceProperties: {
                /**
                 * 实例属性Code。
                 * @example `commodity_type。`
                 */
                Code: string;
                /**
                 * 实例属性Name。
                 * @example `对象存储OSS。`
                 */
                Name: string;
                /**
                 * 实例属性Value。
                 * @example `oss。`
                 */
                Value: string;
            }[];
        }[];
    };
}
