export interface QueryCreateInstancePriceRequest {
    /**
     * 工作空间名称。
     * @example `rtc-e2e-test-post`
     */
    "InstanceName"?: string;
    /**
     * 付费类型，取值如下：
     * - POST：按量付费。
     * - PRE：包年包月。
     * @example `PRE`
     */
    "ChargeType": string;
    /**
     * 地域。
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 工作空间所属的可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId"?: string;
    /**
     * 用户的VPC ID。
     * @example `vpc-2ze9xoh8qyt1rnxfmfcdi`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机ID组。
     */
    "VSwitchIds"?: string[];
    /**
     * 资源规格。
     */
    "ResourceSpec"?: {
        /**
         * CPU数量。
         * @example `4`
         */
        Cpu: number;
        /**
         * 内存大小。
         * > 内存大小必须为CPU数量的4倍。
         * @example `16`
         */
        MemoryGB: number;
    };
    /**
     * 订购周期，包年包月实例仅支持按年（Year）和月（Month）订购，按量付费实例选择小时（Hour）。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 订购周期数量。
     * > 当ChargeType配置为PRE时，Duration参数必填。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 是否自动续费。取值：
     * - **true**：自动续费
     * - **false**：不自动续费（默认）
     * >按量付费时，该参数无效。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 存储信息。
     */
    "Storage"?: {
        /**
         * OSS存储信息。
         */
        Oss: {
            /**
             * OSS的Bucket名称。
             * @example `quicktracing`
             */
            Bucket: string;
        };
    };
    "UsePromotionCode"?: boolean;
    /**
     * 优惠券code
     * @example `500041860100636`
     */
    "PromotionCode"?: string;
    /**
     * 优惠券code
     */
    "Extra"?: string;
    /**
     * 优惠券code
     */
    "ArchitectureType"?: string;
    "Ha"?: boolean;
    "HaResourceSpec"?: {
        Cpu: number;
        MemoryGB: number;
    };
}
