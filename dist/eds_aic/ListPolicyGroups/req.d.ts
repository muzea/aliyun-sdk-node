export interface ListPolicyGroupsRequest {
    /**
     * 策略ID列表。
     */
    "PolicyGroupIds"?: string[];
    /**
     * 策略名称。
     * @example `默认策略`
     */
    "PolicyGroupName"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 用来标记当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****`
     */
    "NextToken"?: string;
}
