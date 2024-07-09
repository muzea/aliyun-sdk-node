export interface CreateAutoSnapshotPolicyRequest {
    /**
     * 自动快照策略所属的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "regionId": string;
    /**
     * 自动快照策略的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空
     * @example `TestName`
     */
    "autoSnapshotPolicyName"?: string;
    /**
     * 自动快照的创建时间点。使用UTC +8时间，单位为小时。取值范围：0~23，代表00:00至23:00共24个时间点，例如1表示01:00。格式说明：
     * - 传入的参数需要保持JSON数组格式。例如，\["1"\]表示01:00创建自动快照。
     * - 当一天内需要创建多次自动快照时，可以传入多个时间点，时间点之间用半角逗号（,）隔开，最多传入24个时间点。例如，\["1","3","5"\]表示01:00、03:00、05:00时创建自动快照。
     * @example `["0", "1", … "23"]`
     */
    "timePoints": string;
    /**
     * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，例如1表示周一。格式说明：
     * - 传入的参数需要保持JSON数组格式。例如，\["1"\]表示每周一重复创建自动快照。
     * - 当一星期内需要创建多次自动快照时，可以传入多个时间点，时间点之间用半角逗号（,）隔开，最多传入7个时间点。例如，\["1","3","5"\]表示每周一、周三、周五重复创建自动快照。
     * @example `["1","2"]`
     */
    "repeatWeekdays": string;
    /**
     * 自动快照的保留时间，单位为天。取值范围：
     * - -1：永久保存
     * - 1~65535：指定保存天数
     * 默认值：-1。
     * @example `30`
     */
    "retentionDays": number;
    /**
     * 是否允许自动跨地域复制。
     * - true：允许。
     * - false：不允许。
     * @example `false`
     */
    "EnableCrossRegionCopy"?: boolean;
    /**
     * 跨地域复制快照的目标地域。目前支持设置一个目标地域。
     * @example `["cn-hangzhou"]`
     */
    "TargetCopyRegions"?: string;
    /**
     * > 该参数暂未开放使用。
     * @example `null`
     */
    "StorageLocationArn"?: string;
    /**
     * 跨地域复制快照的保留时间，单位为天。取值范围：
     * - -1：永久保存
     * - 1~65535：指定保存天数
     * 默认值：-1。
     * @example `30`
     */
    "CopiedSnapshotsRetentionDays"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 快照的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 快照的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-aek2kkmhmhs****`
     */
    "ResourceGroupId"?: string;
    /**
     * 快照异地备份加密参数对象
     */
    "CopyEncryptionConfiguration"?: {
        /**
         * 是否开启快照异地加密备份。取值范围：
         * - true：是。
         * - false：否。
         * 默认值：false。
         * @example `false`
         */
        Encrypted: boolean;
        /**
         * 快照异地加密备份使用的 KMS 密钥 ID
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
         */
        KMSKeyId: string;
        /**
         * 该参数暂未开放使用。
         */
        Arn: {
            /**
             * 该参数暂未开放使用。
             * @example `hide`
             */
            RoleType: string;
            /**
             * 该参数暂未开放使用。
             * @example `hide`
             */
            Rolearn: string;
            /**
             * 该参数暂未开放使用。
             * @example `1000000000`
             */
            AssumeRoleFor: number;
        }[];
    };
}
