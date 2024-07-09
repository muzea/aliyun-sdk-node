export interface SuspendProcessesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp15oubotmrq11xe****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 需要暂停的活动类型。取值范围：
     * - scalein：缩容流程。
     * - scaleout：扩容流程。
     * - healthcheck：健康检查。
     * - alarmnotification：报警任务。
     * - scheduledaction：定时任务。
     * 目前系统仅支持暂停5种活动类型，如果您指定的活动超过以上5种，系统会自动去掉重复的活动类型。
     */
    "Processes": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
