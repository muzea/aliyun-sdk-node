export interface DescribeCloudAssistantSettingsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    OssDeliveryConfigs: {
        /**
         * OSS投递配置列表。
         */
        OssDeliveryConfig: {
            /**
             * OSS加密方式，可能值：
             * - Inherit：继承 Bucket；
             * - OssManaged：OSS 完全托管；
             * - KMS：KMS加密。
             * @example `Inherit`
             */
            EncryptionType: string;
            /**
             * OSS加密算法，可能值：
             * - AES256
             * - SM4
             * @example `AES256`
             */
            EncryptionAlgorithm: string;
            /**
             * 投递类型，可能值：
             * - SessionManager：会话操作记录。
             * - Invocation：任务执行记录。
             * @example `SessionManager`
             */
            DeliveryType: string;
            /**
             * 是否开启投递到OSS功能。
             * @example `false`
             */
            Enabled: boolean;
            /**
             * OSS存储空间名称。
             * @example `example-bucket`
             */
            BucketName: string;
            /**
             * OSS存储空间目录前缀。
             * @example `sessionmanager/audit`
             */
            Prefix: string;
            /**
             * 加密方式为KMS时，用户的主密钥CMK ID。
             * @example `a807****7a70e`
             */
            EncryptionKeyId: string;
        }[];
    };
    SlsDeliveryConfigs: {
        /**
         * SLS投递配置列表。
         */
        SlsDeliveryConfig: {
            /**
             * 投递类型，可能值：
             * - SessionManager：会话操作记录。
             * - Invocation：任务执行记录。
             * @example `SessionManager`
             */
            DeliveryType: string;
            /**
             * SLS日志库名称。
             * @example `example-logstore`
             */
            LogstoreName: string;
            /**
             * 是否开启投递到SLS功能。
             * @example `false`
             */
            Enabled: boolean;
            /**
             * SLS项目名称。
             * @example `example-project`
             */
            ProjectName: string;
        }[];
    };
    /**
     * 云助手Agent升级配置。
     */
    AgentUpgradeConfig: {
        /**
         * 是否开启自定义Agent升级配置。如查询结果为false或空，默认保持每30分钟尝试升级一次。
         * @example `true`
         */
        Enabled: boolean;
        AllowedUpgradeWindows: {
            /**
             * 允许升级的时间段列表。
             */
            AllowedUpgradeWindow: string[];
        };
        /**
         * 允许升级时间段的时区。
         * @example `Asia/Shanghai`
         */
        TimeZone: string;
    };
}
