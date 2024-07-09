export interface DescribeIntentRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 意图所在的话术id
     * @example `b9ff4e88-65f9-4eb3-987c-11ba51f3f24d`
     */
    "ScriptId": string;
    /**
     * 查询的意图id
     * @example `0f8a0059-dc9c-4151-8378-4734bbadf3cc`
     */
    "IntentId": string;
}
