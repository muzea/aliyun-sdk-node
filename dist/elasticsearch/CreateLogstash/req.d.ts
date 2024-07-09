export interface CreateLogstashRequest {
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体。
     * @example `7.4.0_with_X-Pack`
     */
    "body": {
        /**
         * 实例的付费模式。可选值：
         * - prepaid：包年包月
         * - postpaid：按量付费
         * @example `prepaid`
         */
        paymentType: string;
        /**
         * 实例版本。可选值：
         * - 6.7_with_X-Pack
         * - 7.4_with_X-Pack
         * @example `6.7_with_X-Pack`
         */
        version: string;
        /**
         * 实例所包含的节点个数。
         * @example `2`
         */
        nodeAmount: number;
        /**
         * 数据节点配置信息。
         */
        nodeSpec: {
            /**
             * 节点磁盘大小，单位：GB。
             * @example `50`
             */
            disk: number;
            /**
             * 节点磁盘类型。可选值：
             * - cloud_ssd
             * - cloud_efficiency
             * @example `cloud_ssd`
             */
            diskType: string;
            /**
             * 节点规格，规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.ic5.2xlarge`
             */
            spec: string;
        };
        /**
         * 网络配置。
         */
        networkConfig: {
            /**
             * 网络类型，目前仅支持专有网络。
             * @example `vpc`
             */
            type: string;
            /**
             * 专有网络ID。
             * @example `vpc-bp16k1dvzxtmagcva****`
             */
            vpcId: string;
            /**
             * 交换机ID。
             * @example `vsw-bp1k4ec6s7sjdbudw****`
             */
            vswitchId: string;
            /**
             * 实例所在的可用区。
             * @example `cn-hangzhou-i`
             */
            vsArea: string;
        };
        /**
         * 包年包月实例的付费详情，创建包年包月实例时必填。
         */
        paymentInfo: {
            /**
             * 购买时长，支持按月和按年购买。单位：1~9月，1~3年。
             * @example `1`
             */
            duration: number;
            /**
             * 包年包月单位，可选值：
             * - Year：年
             * - Month：月
             * @example `Month`
             */
            pricingCycle: string;
            /**
             * 是否开启自动续费：
             * - true：是
             * - false：否
             * @example `false`
             */
            isAutoRenew: boolean;
            /**
             * 自动续费周期，单位：月。**isAutoRenew**为**true**时必填，参数值可选范围与购买页一致。
             * @example `3`
             */
            autoRenewDuration: number;
        };
        /**
         * 实例名称。
         * @example `ls-cn-abc`
         */
        description: string;
        /**
         * 实例所在的资源组ID。
         * @example `rg-acfmxxkk2p7****`
         */
        resourceGroupId: string;
    };
}
