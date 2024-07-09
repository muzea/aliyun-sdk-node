export interface ListInstancesRequest {
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 最大结果集。建议取值在1~100之间。
     * @example `1`
     */
    "MaxResults": number;
}
