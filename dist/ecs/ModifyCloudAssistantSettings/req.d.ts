export interface ModifyCloudAssistantSettingsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务配置类型。当前取值范围：
     * - SessionManagerDelivery：会话操作记录投递。
     * - InvocationDelivery：任务执行记录投递。
     * - AgentUpgradeConfig：云助手Agent升级配置。
     * @example `SessionManagerDelivery`
     */
    "SettingType": string;
    /**
     * OSS投递配置信息。
     */
    "OssDeliveryConfig"?: {
        /**
         * 是否开启投递到OSS功能。默认值：false。
         * @example `false`
         */
        Enabled: boolean;
        /**
         * OSS存储空间名称。
         * @example `example-bucket`
         */
        BucketName: string;
        /**
         * OSS存储空间目录前缀。约束如下：
         * - 长度不得超过 254 个字符。
         * - 不能以正斜线（/）或者反斜线（\）开头。
         * 注：传入""表示不需要目录前缀；若之前设置过，而当前不再需要目录前缀可传入""清空。
         * @example `sessionmanager/audit`
         */
        Prefix: string;
        /**
         * OSS加密方式，可选值：
         * - Inherit：继承 Bucket；
         * - OssManaged：OSS 完全托管；
         * - KMS：KMS加密。
         * @example `Inherit`
         */
        EncryptionType: string;
        /**
         * OSS加密算法，可选值：
         * - AES256
         * - SM4
         * @example `AES256`
         */
        EncryptionAlgorithm: string;
        /**
         * 加密方式为KMS时，用户的主密钥CMK ID。
         * @example `a807****7a70e`
         */
        EncryptionKeyId: string;
    };
    /**
     * SLS投递配置信息。
     */
    "SlsDeliveryConfig"?: {
        /**
         * 是否开启投递到SLS功能。
         * 默认值：false
         * @example `false`
         */
        Enabled: boolean;
        /**
         * SLS项目名称。
         * @example `example-project`
         */
        ProjectName: string;
        /**
         * SLS日志库名称。
         * @example `example-logstore`
         */
        LogstoreName: string;
    };
    /**
     * 云助手Agent升级配置。
     */
    "AgentUpgradeConfig"?: {
        /**
         * 是否开启自定义Agent升级配置。如设置为false，默认保持每30分钟尝试升级一次。
         * 默认值：false。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 允许升级的时间段列表，可精确到分，默认为 UTC 时区。
         * 各时间段的间隔不能小于1小时。
         * 格式：开始时间(HH:mm)-结束时间(HH:mm)。
         * 如[
         * "02:00-03:00",
         * "05:00-06:00"
         * ]
         * 代表在 UTC 时区的每天2点-3点、5点-6点允许升级。
         */
        AllowedUpgradeWindow: string[];
        /**
         * 允许升级时间段的时区。默认为 UTC 时区。
         * 时区支持以下两种形式：
         * - 时区全称： 如Asia/Shanghai（中国/上海时间）、America/Los_Angeles（美国/洛杉矶时间）等。
         * - 时区相对于格林威治时间的偏移量： 如GMT+8:00（东八区）、GMT-7:00（西七区）等。小时位不支持添加前导零。
         * @example `Asia/Shanghai`
         */
        TimeZone: string;
    };
}
