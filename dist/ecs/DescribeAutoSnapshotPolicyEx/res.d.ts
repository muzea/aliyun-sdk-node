export interface DescribeAutoSnapshotPolicyExResponse {
    /**
     * 分页展示返回的自动快照策略时的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 自动快照策略列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 自动快照策略的总个数。
     * @example `1`
     */
    TotalCount: number;
    AutoSnapshotPolicies: {
        /**
         * 自动快照策略详情AutoSnapshotPolicy组成的集合。
         */
        AutoSnapshotPolicy: {
            /**
             * 指定自动快照的创建时间点。
             * 使用UTC +8时间，单位为小时。从00:00~23:00共24个时间点可选，参数为0~23的数字，如：1代表在01:00时间点。可以选定多个时间点。
             * 传递参数为JSON数组格式：`["0", "1", ... "23"]`，最多24个时间点，用半角逗号字符（,）隔开。
             * @example `["1"]`
             */
            TimePoints: string;
            /**
             * 创建时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-12-10T16:00Z`
             */
            CreationTime: string;
            /**
             * 自动快照策略状态。可能值：
             * - Normal：正常。
             * - Expire：由于账号欠费无法使用该策略。
             * @example `Normal`
             */
            Status: string;
            /**
             * 自动快照策略的名称。
             * @example `testAutoSnapshotPolicyName`
             */
            AutoSnapshotPolicyName: string;
            /**
             * > 该参数正在邀测中，暂未开放使用。
             * @example `test`
             */
            TargetCopyRegions: string;
            /**
             * > 该参数正在邀测中，暂未开放使用。
             * @example `0`
             */
            CopiedSnapshotsRetentionDays: number;
            /**
             * 自动快照策略ID。
             * @example `sp-bp67acfmxazb4ph****`
             */
            AutoSnapshotPolicyId: string;
            /**
             * 指定自动快照的保留时间，单位为天。可能值：
             * -  -1：永久保存。
             * - 1~65536：指定保存天数。
             * @example `7`
             */
            RetentionDays: number;
            /**
             * 自动快照策略所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 启用该策略的云盘数量。
             * @example `1`
             */
            DiskNums: number;
            /**
             * > 该参数正在邀测中，暂未开放使用。
             * @example `false`
             */
            EnableCrossRegionCopy: boolean;
            /**
             * 指定自动快照的重复日期。选定周一到周日中需要创建快照的日期，参数为1~7的数字，如1表示周一。允许选择多个日期。
             * @example `["6"]`
             */
            RepeatWeekdays: string;
            /**
             * 启用该策略的拓展卷数量。
             * @example `2`
             */
            VolumeNums: number;
            /**
             * 资源组ID。
             * @example `rg-aek2kkmhmhs****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 自动快照策略的标签键值集合。
                 */
                Tag: {
                    /**
                     * 自动快照策略的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 自动快照策略的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            /**
             * 快照跨地域复制加密参数对象。
             */
            CopyEncryptionConfiguration: {
                /**
                 * 是否开启快照跨地域加密复制。取值范围：
                 * - true：是。
                 * - false：否。
                 * 默认值：false。
                 * @example `false`
                 */
                Encrypted: boolean;
                /**
                 * 快照跨地域加密复制使用的KMS密钥ID。
                 * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
                 */
                KMSKeyId: string;
            };
            /**
             * 自动快照策略类型。
             * - Custom：用户定义的快照策略。
             * - System：系统定义的快照策略。
             * @example `Custom`
             */
            Type: string;
        }[];
    };
}
