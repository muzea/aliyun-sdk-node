export interface MakeCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起外呼的坐席ID，非必填，不填默认使用当前RAM账号映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 主叫号码，如果是内部呼叫，这此参数无效，如果是外部呼叫，此参数为当前坐席可用的外呼号码，需要确保该号码可外呼且坐席对该号码有使用权，使用权通过两种途径获得，一是将号码绑定到当前坐席签入的技能组上，二是将号码设置为坐席的个人外呼号码。
     * @example `010989****`
     */
    "Caller"?: string;
    /**
     * 被叫号码，如果是内部呼叫，该字段填写目标坐席的分机号，如果是外呼呼叫，填写客户的电话号码。
     * @example `1318888****`
     */
    "Callee": string;
    /**
     * 超时时间，呼叫在经过该参数指定的时间仍然未接通的情况下，则主动挂断，取值范围30-300，单位秒。
     * @example `30`
     */
    "TimeoutSeconds"?: number;
    /**
     * 随路数据，客户无需关心。
     * @example `tags`
     */
    "Tags"?: string;
    /**
     * 脱敏后的被叫号码，如果该字段不为空，表示需要对被叫号码脱敏，脱敏规则由客户自行定义，只需将脱敏后的被叫号码填入即可，使用脱敏被叫会导致某些场景下看到的是脱敏后的被叫号码，无法查看真实被叫号码。
     * @example `131****8888`
     */
    "MaskedCallee"?: string;
    /**
     * 媒体类型，默认是语音(AUDIO), 其他可选参数包括VIDEO。
     * @example `AUDIO`
     */
    "MediaType"?: string;
}
