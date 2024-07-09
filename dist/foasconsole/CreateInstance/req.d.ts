export interface CreateInstanceRequest {
    /**
     * 工作空间名称。
     * @example `rtc-e2e-test-pre`
     */
    "InstanceName": string;
    /**
     * 付费类型，取值如下：
     * - POST：按量付费
     * - PRE：包年包月
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
     * @example `cn-beijing-g`
     */
    "ZoneId": string;
    /**
     * 专有网络VPC ID。
     * @example `vpc-2ze9xoh8qyt1rnxfmfcdi`
     */
    "VpcId": string;
    /**
     * 虚拟交换机ID组。
     */
    "VSwitchIds": string[];
    /**
     * 资源规格。
     * > 当ChargeType配置为PRE时，资源规格参数必填。
     */
    "ResourceSpec"?: {
        /**
         * CPU数量。
         * > - 在包年包月的工作空间下，CPU数量必填。在按量付费的工作空间下，可以不用填写CPU数量。- 创建的目标项目空间的CPU数量要小于工作空间中剩余CPU数量（工作空间购买的总CPU数量减去其他项目空间已分配CPU数量），否则会报错。
         * @example `30`
         */
        Cpu: number;
        /**
         * 内存大小。单位为GB。
         * > 内存大小必须为CPU数量的4倍。
         * @example `120`
         */
        MemoryGB: number;
    };
    /**
     * 指定预付费实例为包年或包月类型，取值范围如下：
     * - **year**：年
     * - **month**：月
     * > 若付费类型为PrePaid，该参数为必传参数。
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
     * 存储参数。
     */
    "Storage": {
        /**
         * OSS存储。
         */
        Oss: {
            /**
             * OSS的Bucket名称。
             * @example `oss-flink-cn-shanghai-260343971602724445`
             */
            Bucket: string;
        };
    };
    "UsePromotionCode"?: boolean;
    /**
     * 优惠券code。
     * @example `500043499350689`
     */
    "PromotionCode"?: string;
    /**
     * 优惠券code
     */
    "ResourceGroupId"?: string;
    /**
     * 优惠券code
     */
    "Extra"?: string;
    /**
     * 优惠券code
     */
    "ArchitectureType"?: string;
    "Ha"?: boolean;
    "HaZoneId"?: string;
    "HaVSwitchIds"?: string[];
    "HaResourceSpec"?: {
        Cpu: number;
        MemoryGB: number;
    };
    "MonitorType"?: string;
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag"?: {
        /**
         * 标签键
         */
        Key: string;
        /**
         * 标签值
         */
        Value: string;
    }[];
}
