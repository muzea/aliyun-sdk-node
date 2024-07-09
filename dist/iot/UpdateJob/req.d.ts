export interface UpdateJobRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 任务描述信息。长度不超过100个字符。
     * @example `jobDescription`
     */
    "Description"?: string;
    /**
     * 任务下作业执行的超时时间。
     * 更多信息，请参见下文“TimeoutConfig定义”。
     * @example `{"inProgressTimeoutInMinutes": 60}`
     */
    "TimeoutConfig"?: any;
    /**
     * 任务下每分钟推送的作业数量。取值范围为50~1000。
     * @example `{"maximumPerMinute": 1000}`
     */
    "RolloutConfig"?: any;
    /**
     * 任务ID。任务的全局唯一标识符。
     * @example `XUbmsMHmkqv0PiAG****010001`
     */
    "JobId": string;
}
