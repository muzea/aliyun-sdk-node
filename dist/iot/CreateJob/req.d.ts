export interface CreateJobRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 任务的描述信息。长度不超过100个字符。
     * @example `jobDescription`
     */
    "Description"?: string;
    /**
     * 下发给设备的任务执行规则文件。数据格式为JSON，长度不超过65536个字符。
     * 更多信息，请参见下文“JobDocument定义”。
     * @example `{ "serviceIdentifier": "test_service", "params": { "key1": "value1", "key2": "value2" } } `
     */
    "JobDocument": string;
    /**
     * 任务类型。取值：
     * - **INVOKE_SERVICE**：设备批量服务调用任务。
     * - **SET_PROPERTY**：设备批量属性设置任务。
     * - **PUB**：Pub批量消息推送任务。
     * - **CUSTOM_JOB**：自定义任务。
     * @example `INVOKE_SERVICE`
     */
    "Type": string;
    /**
     * 自定义任务中下发给设备的文件。
     * 仅**Type**为**CUSTOM_JOB**时，可传入此参数，且为非必传参数。
     * 更多信息，请参见下文“JobFile定义”。
     * @example `{   "fileKey":"5cc34***f9/tazJ***s",   "signMethod":"Sha256",   "sign":"***" }`
     */
    "JobFile"?: any;
    /**
     * 任务名称。支持中文、英文字母、数字和下划线（_），长度范围为4~30个字符。
     * @example `oneJob`
     */
    "JobName": string;
    /**
     * 任务下作业执行的超时配置，数据格式为JSON，长度不超过8192个字符。
     * 更多信息，请参见下文“TimeoutConfig定义”。
     * @example `{"inProgressTimeoutInMinutes": 60}`
     */
    "TimeoutConfig"?: any;
    /**
     * 任务下作业推送速率配置，数据格式为JSON，长度不超过8192个字符。
     * 更多信息，请参见下文“RolloutConfig定义”。
     * @example `{"maximumPerMinute": 1000}`
     */
    "RolloutConfig"?: any;
    /**
     * 设备任务的目标设备配置。
     * 更多信息，请参见下文“TargetConfig”。
     * @example `{"targetType":"PRODUCT_KEY","targetProduct":"a1j***3d"}`
     */
    "TargetConfig": any;
    /**
     * 任务调度时间的毫秒数。取值范围：当前时间的10分钟后到7天之间。
     * - 不传入此参数：任务创建后，立即初始化并调度执行。
     * - 传入此参数：任务创建后，先初始化，等到设置的调度时间后，才开始调度执行。
     * @example `1557062301656`
     */
    "ScheduledTime"?: number;
}
