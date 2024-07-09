export interface ListEcsInstancesRequest {
    /**
     * 返回结果页数。最大值500。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页包含的结果数。默认值10，最大值500。
     * @example `10`
     */
    "size"?: number;
    /**
     * ECS实例ID列表。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp13y63575oypr9d****","i-bp1gyhphjaj73jsr****"]`
     */
    "ecsInstanceIds"?: string;
    /**
     * ECS实例名称。
     * @example `test`
     */
    "ecsInstanceName"?: string;
    /**
     * ECS实例标签，必须包含：
     * - tagKey：标签键
     * - tagValue：标签值
     * @example `[{ "tagKey":"a","tagValue":"b"}]`
     */
    "tags"?: string;
    /**
     * ECS实例所在的VPC ID。
     * @example `vpc-bp16k1dvzxtmagcva****`
     */
    "vpcId"?: string;
}
