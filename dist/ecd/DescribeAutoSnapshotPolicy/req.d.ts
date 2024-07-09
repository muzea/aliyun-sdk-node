export interface DescribeAutoSnapshotPolicyRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动快照策略ID。
     * @example `sp-c5tv9d64ebjnj****`
     */
    "PolicyId"?: string;
    /**
     * 自动快照策略的名称。
     * @example `测试1201`
     */
    "PolicyName"?: string;
    /**
     * 分页查询时，每页最大行数。
     * - 最大值：100
     * - 默认值：20
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6mqIGdPhID94rjhZFGsvpJo`
     */
    "NextToken"?: string;
}
