export interface StartJobRequest {
    /**
     * 实例id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    "InstanceId": string;
    /**
     * 作业组id
     * @example `4f21446e-324e-46f2-bf62-7f341fb004ea`
     */
    "JobGroupId"?: string;
    /**
     * 场景id，为了兼容旧版外呼功能。可不填。
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "ScenarioId"?: string;
    /**
     * 作业数据
     * @example `{"extras":[{"value":"2019-08-21 09:49:59.0","key":"djrq"}],"contacts":[{"phonenumber":"1816*******","name":"张三","referenceId":"2c9a9a7c6caedab6016cb1ddd13325ed","honorific":"张先生"}]}`
     */
    "JobJson": string;
    /**
     * 话术id，2020年2月份后创建的话术，该字段必填
     * @example `b9ff4e88-65f9-4eb3-987c-11ba51f3f24d`
     */
    "ScriptId"?: string;
    /**
     * 主叫号码列表
     * @example `10086`
     */
    "CallingNumber"?: string[];
}
