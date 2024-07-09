export interface EnterStandbyRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1fo0dbtsbmqa9h****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25965~~) 。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * ECS实例的ID。
     */
    "InstanceIds": string[];
    /**
     * 是否采用异步任务方式执行。取值范围：
     * - true：异步任务执行。
     * - false：同步执行。
     * 默认值： false。
     * @example `false`
     */
    "Async"?: boolean;
}
