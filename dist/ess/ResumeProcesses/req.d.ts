export interface ResumeProcessesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp15oubotmrq11xe****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * 只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 需要恢复的活动信息集合。
     */
    "Processes": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
