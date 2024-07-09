export interface TriggerExecutionRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标EventTrigger、AlarmTrigger或TimerTrigger执行ID。
     * @example `exec-sadw3f23rsad`
     */
    "ExecutionId": string;
    /**
     * 触发器类型：
     * - Event
     * - Alarm
     * - Timer
     * @example `Event`
     */
    "Type": string;
    /**
     * 发送给触发器任务的消息体。
     * @example `{"eventTime": "20181226T220114.058+0800", "id": "9435EAD6-3CF6-4494-8F7A-3A********77","level": "INFO","name": "Instance:StateChange","product": "ECS","regionId":"cn-hangzhou","resourceId": "acs:ecs:cn-hangzhou:169070********30:instance/i-bp1ecr********5go2go","userId": "169070********30","ver": "1.0","content": {"resourceId": "i-bp1ecr********5go2go", "resourceType": "ALIYUN::ECS::Instance","state": "Stopping"} }`
     */
    "Content"?: string;
    /**
     * 保证幂等性的一个Token。
     * @example `dswe2-3i0-029`
     */
    "ClientToken"?: string;
}
