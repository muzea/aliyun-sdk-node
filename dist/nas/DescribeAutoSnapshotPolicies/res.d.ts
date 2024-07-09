export interface DescribeAutoSnapshotPoliciesResponse {
    /**
     * 自动快照策略的总个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 分页展示返回的自动快照策略时的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 自动快照策略列表的页码。
     * @example `1`
     */
    PageNumber: number;
    AutoSnapshotPolicies: {
        /**
         * 自动快照策略详情集合。
         */
        AutoSnapshotPolicy: {
            /**
             * 自动快照的创建时间点。
             * 单位：小时
             * 包括：`0~23`，表示从`00:00~23:00`共24个时间点。1代表在01:00时间点。最多24个时间点，用半角逗号（,）隔开。
             * @example `4,19`
             */
            TimePoints: string;
            /**
             * 自动快照策略状态。
             * 包括：
             * - Creating：创建中
             * - Available：正常可用
             * @example `Available`
             */
            Status: string;
            /**
             * 自动快照的重复日期。
             * 重复周期：星期
             * 取值范围：1~7，例如：1表示周一。
             * @example `1,5`
             */
            RepeatWeekdays: string;
            /**
             * 自动快照策略的名称。
             * @example `FinanceJoshua`
             */
            AutoSnapshotPolicyName: string;
            /**
             * 创建时间。
             * 按照[ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html)标准表示，并使用UTC时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2014-04-21T12:08:52Z`
             */
            CreateTime: string;
            /**
             * 自动快照策略ID。
             * @example `sp-extreme-233e6****`
             */
            AutoSnapshotPolicyId: string;
            /**
             * 自动快照的保留时间。
             * 单位：天
             * 包括：
             * - -1：永久保存，当快照数量达到额度上限后被自动删除。
             * - 1~65536：指定保存天数，保留时间到期后快照会被自动释放。
             * @example `30`
             */
            RetentionDays: number;
            /**
             * 启用该策略的文件系统数量。
             * @example `2`
             */
            FileSystemNums: number;
            /**
             * 自动快照策略所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 文件系统类型。
             * @example `extreme`
             */
            FileSystemType: string;
        }[];
    };
}
