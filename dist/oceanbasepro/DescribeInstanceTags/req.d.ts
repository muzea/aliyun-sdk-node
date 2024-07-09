export interface DescribeInstanceTagsRequest {
    /**
     * 集群 ID 列表。
     * @example `["ob3za5w73as8rk"]`
     */
    "InstanceIds"?: string;
    /**
     * 标签值。
     * @example `[{"Key": "xxx", "Value", "xxx"},{}]`
     */
    "Tags"?: string;
}
