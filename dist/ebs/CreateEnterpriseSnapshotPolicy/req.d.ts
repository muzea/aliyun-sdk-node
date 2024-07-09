export interface CreateEnterpriseSnapshotPolicyRequest {
    /**
     * 地域ID。您可以调用DescribeRegions查询异步复制功能支持的地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照策略名称。
     * @example `xx`
     */
    "Name": string;
    /**
     * 类型。取值范围：
     * - DISK
     * @example `DISK`
     */
    "TargetType": string;
    /**
     * 状态。取值范围：
     * - DISABLED
     * - ENABLED
     * @example `ENABLED`
     */
    "State"?: string;
    /**
     * 描述信息。
     * @example `xxx`
     */
    "Desc"?: string;
    /**
     * 调度规则。
     */
    "Schedule": {
        /**
         * 策略执行的周期和时间。使用cron表达式。
         * 例如：0 0 4 1/1 * ?表示从每月第一天上午4时开始，每天的上午4时执行快照操作。
         * @example `0 0 *​/24 * * *`
         */
        CronExpression: string;
    };
    /**
     * 保留规则。
     */
    "RetainRule": {
        /**
         * 个数。取值范围 [1, 256]。
         * @example `10`
         */
        Number: number;
        /**
         * 保留时间值.取值范围大于1。
         * @example `14`
         */
        TimeInterval: number;
        /**
         * 保留时间单位。取值范围：
         * - DAYS
         * - WEEKS
         * @example `DAYS`
         */
        TimeUnit: string;
    };
    /**
     * 高级快照特性。
     */
    "StorageRule"?: {
        /**
         * 是否启动快照极速可用。取值范围：
         * - true
         * - false
         * @example `false`
         */
        EnableImmediateAccess: boolean;
    };
    /**
     * 快照复制信息。
     */
    "CrossRegionCopyInfo"?: {
        /**
         * 是否启用跨地域复制。取值范围：
         * - true
         * - false
         * @example `false`
         */
        Enabled: boolean;
        /**
         * 目的地域信息。
         */
        Regions: {
            /**
             * 快照复制目的地域ID。您可以调用[DescribeDiskReplicaPairs](~~354206~~)查询存量异步复制关系的地域信息。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 目的地快照保留天数。取值范围大于1。
             * @example `7`
             */
            RetainDays: number;
        }[];
    };
    /**
     * 标签键值对。n的取值范围为 [1, 20]。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 资源的标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `xxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 特殊保留规则。
     */
    "SpecialRetainRules"?: {
        /**
         * 是否启用特殊保留。取值范围：
         * - true
         * - false
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 特殊保留规则列表。
         */
        Rules: {
            /**
             * 特殊保留的快照的周期单位，如果配置成WEEKS，则为每周的第一个快照提供特殊保留，保留的时间由TimeUnit，TimeInterval决定。取值范围为：
             * - WEEKS
             * - MONTHS
             * - YEARS
             * @example `WEEKS`
             */
            SpecialPeriodUnit: string;
            /**
             * 保留时间值。取值范围大于1。
             * @example `14`
             */
            TimeInterval: number;
            /**
             * 特殊快照的保留时间单位。取值范围：
             * - DAYS
             * - WEEKS
             * @example `WEEKS`
             */
            TimeUnit: string;
        }[];
    };
}
