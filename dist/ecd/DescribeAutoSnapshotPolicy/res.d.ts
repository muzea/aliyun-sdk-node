export interface DescribeAutoSnapshotPolicyResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `A7F6612E-59CC-59F9-9DD1-91867FCC****`
     */
    RequestId: string;
    /**
     * 自动快照策略列表。
     */
    AutoSnapshotPolicies: {
        /**
         * 自动快照的创建时间点。
         * 传递参数为JSON数组格式：`["0", "1", ... "23"]`，最多24个时间点，用半角逗号（,）隔开。
         * @example `["17","18"]`
         */
        TimePoints: string;
        /**
         * 创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC时间，格式为`yyyy-mm-ddthh:mm:ssz`。
         * @example `2023-01-11T09:14:00Z`
         */
        CreationTime: string;
        /**
         * 自动快照策略的状态。
         * @example `Normal`
         */
        Status: string;
        /**
         * 绑定该快照策略的云电脑数量。
         * @example `1`
         */
        DesktopNum: number;
        /**
         * 用于规定快照创建时间的Cron表达式。
         * @example `0 0 5,7 ? * 2/2`
         */
        CronExpression: string;
        /**
         * 自动快照的保留时间，单位为天。取值范围：1\~180。
         * @example `2`
         */
        RetentionDays: string;
        /**
         * 自动快照策略名称。
         * @example `snapshot01`
         */
        PolicyName: string;
        /**
         * 自动快照策略ID。
         * @example `sp-3e3bmfcdkjfl1****`
         */
        PolicyId: string;
        /**
         * 自动快照策略所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
