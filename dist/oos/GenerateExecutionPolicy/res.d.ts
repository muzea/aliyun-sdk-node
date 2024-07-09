export interface GenerateExecutionPolicyResponse {
    /**
     * Ram Policy
     * @example `{}`
     */
    Policy: string;
    /**
     * 请求ID
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 缺少的权限列表
     * @example `[{'Action': ['ecs:DescribeInvocationResults', 'ecs:DescribeInstances', 'ecs:RunCommand', 'ecs:DescribeInvocations'], 'ServiceName': 'ecs', 'Resources': '*'}]`
     */
    MissingPolicy: string;
}
