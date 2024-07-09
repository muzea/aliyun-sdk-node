export interface ModifyQpsModeRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-7e225i41****`
     */
    "InstanceId": string;
    /**
     * QPS计费模式。取值：
     * - **month**：月95模式
     * - **day**：日95模式
     * @example `month`
     */
    "Mode": string;
}
