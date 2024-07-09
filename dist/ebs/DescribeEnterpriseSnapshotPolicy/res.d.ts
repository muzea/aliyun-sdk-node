export interface DescribeEnterpriseSnapshotPolicyResponse {
    /**
     * 策略列表
     */
    Policies: {
        /**
         * 快照策略名称
         * @example `xxx`
         */
        Name: string;
        /**
         * 快照策略ID
         * @example `esp-xxx`
         */
        PolicyId: string;
        /**
         * 类型。取值范围：
         * - DISK
         * @example `DISK`
         */
        TargetType: string;
        /**
         * 状态。取值范围：
         * - DISABLED
         * - ENABLED
         * @example `DISABLED`
         */
        State: string;
        /**
         * 快照托管状态
         * @example `false`
         */
        ManagedForEcs: boolean;
        /**
         * 快照策略描述信息
         * @example `xxx`
         */
        Desc: string;
        /**
         * 快照策略调度规则
         */
        Schedule: {
            /**
             * cron tab 表达式
             * @example `1 1 1 *​/1 * ?`
             */
            CronExpression: string;
        };
        /**
         * 快照策略保留规则
         */
        RetainRule: {
            /**
             * 个数
             * @example `10`
             */
            Number: number;
            /**
             * 保留时间值
             * @example `14`
             */
            TimeInterval: number;
            /**
             * 保留时间单位
             * @example `DAYS`
             */
            TimeUnit: string;
        };
        /**
         * 快照策略存储规则
         */
        StorageRule: {
            /**
             * 是否启动快照极速可用
             * @example `false`
             */
            EnableImmediateAccess: boolean;
        };
        /**
         * 快照复制信息
         */
        CrossRegionCopyInfo: {
            /**
             * 是否启用跨地域复制
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 目的地域信息
             */
            Regions: {
                /**
                 * 快照复制目的地
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * 目的地快照保留天数
                 * @example `7`
                 */
                RetainDays: number;
            }[];
        };
        /**
         * 创建时间
         * @example `2023-06-24T06:03:35Z`
         */
        CreateTime: string;
        /**
         * 已经绑定的目标个数
         * @example `10`
         */
        TargetCount: number;
        /**
         * the pair tags
         */
        Tags: {
            /**
             * 资源的标签键
             * @example `key`
             */
            TagKey: string;
            /**
             * 资源的标签值
             * @example `value`
             */
            TagValue: string;
        }[];
        /**
         * the resource group
         * @example `rg-xxx`
         */
        ResourceGroupId: string;
        /**
         * 快照策略特殊保留规则
         */
        SpecialRetainRules: {
            /**
             * 是否启用特殊保留时间
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 特殊保留规则
             */
            Rules: {
                /**
                 * 特殊周期单位
                 * @example `WEEKS`
                 */
                SpecialPeriodUnit: string;
                /**
                 * 保留时间值
                 * @example `1`
                 */
                TimeInterval: number;
                /**
                 * 保留时间单位
                 * @example `WEEKS`
                 */
                TimeUnit: string;
            }[];
        };
        /**
         * 已绑定的磁盘列表
         */
        DiskIds: string[];
    }[];
    /**
     * 分页模式查询时的页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页模式查询时的单页记录数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总个数
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `549BB71F-6778-53CE-AA73-E94ACE802AB4`
     */
    RequestId: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `NextToken`
     */
    NextToken: string;
}
