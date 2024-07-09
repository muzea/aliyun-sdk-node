export interface ExitStandbyRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1fo0dbtsbmqa9h****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * ECS实例的ID。取值可以由多个实例ID组成一个JSON数组，最多支持20个ID，ID之间用半角逗号（,）隔开。
     */
    "InstanceIds": string[];
    /**
     * 是否采用异步任务方式执行。取值范围：
     * - true：异步任务执行。
     * - false：同步任务执行。
     * 默认值： false。
     * @example `false`
     */
    "Async"?: boolean;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
