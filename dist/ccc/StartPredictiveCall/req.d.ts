export interface StartPredictiveCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 主叫号码，需要是实例下可用的外呼号码。
     * @example `0109810****`
     */
    "Caller": string;
    /**
     * 被叫号码。
     * @example `1312353****`
     */
    "Callee": string;
    /**
     * 超时时间，呼叫在经过该参数指定的时间仍然未接通的情况下，则主动挂断，单位秒。
     * @example `10`
     */
    "TimeoutSeconds"?: number;
    /**
     * IVR联系流ID，被叫接通后，通话将自动转入此IVR流程。
     * @example `9774c36c-12fe-4e37-adce-89bc77ce****`
     */
    "ContactFlowId": string;
    /**
     * 随路数据，主要用于扩展需求，普通用户无需关心。
     * @example `无`
     */
    "Tags"?: string;
    /**
     * 传入的联系流变量，格式为JSON数组的字符串，数组元素是一个键值对，Key为变量名，Value为变量值。在联系流ID对应的IVR的开始节点中新建同名的自定义参数，即可在IVR流程中使用该参数。
     * @example `{"name":"王先生","time":"19点20分","address":"某某中心"}`
     */
    "ContactFlowVariables"?: string;
    /**
     * 脱敏后的被叫号码，如果该字段不为空，表示需要对被叫号码脱敏，脱敏规则由客户自行定义，只需将脱敏后的被叫号码填入即可，使用脱敏被叫会导致某些场景下看到的是脱敏后的被叫号码，无法查看真实被叫号码。
     * @example `1312353****`
     */
    "MaskedCallee"?: string;
    /**
     * 技能组ID，非必填，如果该参数有值，则外呼号码仅从该参数指定的技能组的关联号码中选取。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId"?: string;
}
