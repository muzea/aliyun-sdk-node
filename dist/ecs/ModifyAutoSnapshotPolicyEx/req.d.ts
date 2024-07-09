export interface ModifyAutoSnapshotPolicyExRequest {
    /**
     * 自动快照策略所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "regionId": string;
    /**
     * 目标自动快照策略ID。您可以调用[DescribeAutoSnapshotPolicyEx](~~25530~~)查看您可用的自动快照策略。
     * @example `sp-bp12m37ccmxvbmi5****`
     */
    "autoSnapshotPolicyId": string;
    /**
     * 自动快照策略的名称。如果参数为空则代表不修改。
     * @example `SPTestName`
     */
    "autoSnapshotPolicyName"?: string;
    /**
     * 自动快照的创建时间点。使用UTC +8时间，单位为小时。取值范围为0~23，代表00:00至23:00共24个时间点，如1表示01:00。
     * 当一天内需要创建多次自动快照时，可以传入多个时间点：
     * - 最多传入24个时间点。
     * - 多个时间点用一个格式类似`"0", "1", … "23"`的JSON数组表示，时间点之间用半角逗号（,）隔开。
     * @example `["0", "1"]`
     */
    "timePoints"?: string;
    /**
     * 自动快照的重复日期，单位为天，周期为星期。取值范围为1~7，如1表示周一。
     * 当一星期内需要创建多次自动快照时，可以传入多个时间点：
     * - 最多传入7个时间点。
     * - 多个时间点用一个格式类似`"1", "2", … "7"`的JSON数组表示，时间点之间用半角逗号（,）隔开。
     * @example `["1", "7"]`
     */
    "repeatWeekdays"?: string;
    /**
     * 自动快照的保留时间，单位为天。取值范围：
     * - -1：永久保存。
     * - 1~65536：指定保存天数。
     * 默认值为-1。
     * @example `30`
     */
    "retentionDays"?: number;
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
     * 跨地域复制快照的保留时间，单位为天。取值范围：
     * - -1：永久保存。
     * - 1~65535：指定保存天数。
     * 默认值为-1。
     * @example `30`
     */
    "CopiedSnapshotsRetentionDays"?: number;
    /**
     * 快照跨地域复制加密参数对象
     */
    "CopyEncryptionConfiguration"?: {
        /**
         * 是否开启快照跨地域加密复制。取值范围：
         * - true：是。
         * - false：否。
         * 默认值：false。
         * @example `false`
         */
        Encrypted: boolean;
        /**
         * 快照跨地域加密复制使用的 KMS 密钥 ID。
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
