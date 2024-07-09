export interface BlindTransferRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起直接转接的坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `ACC-YUNBS-1.0.10-****`
     */
    "DeviceId"?: string;
    /**
     * 转接发起方，当场景是直接转接到外部号码时，用此参数指定的号码作为主叫，转内部坐席或技能组时，此参数无效，发起方由UserId指定。
     * @example `08314325****`
     */
    "Transferor"?: string;
    /**
     * 被转接方，可以是坐席ID或技能组ID。
     * @example `agent@ccc-test`
     */
    "Transferee": string;
    /**
     * 直接转接超时时间，超过指定时间被转接方没有接起通话，则挂断通话，此字段选填，默认30，单位秒。
     * @example `60`
     */
    "TimeoutSeconds"?: number;
    /**
     * 通话ID。
     * @example `job-6538214103685****`
     */
    "JobId": string;
    /**
     * 转接到技能组队列时的排队优先级，取值范围0-9，0优先级最高，9最低。
     * @example `5`
     */
    "CallPriority"?: number;
    /**
     * 转接到技能组队列时的座席分配策略名称。
     * @example `MOST_IDLE，MOST_SKILLED，MOST_ACQUAINTED，CUSTOMIZED等`
     */
    "StrategyName"?: string;
    /**
     * 转接到技能组队列时的座席分配策略参数。
     * @example `当分配策略为CUSTOMIZED时，本参数的内容为如下格式：
     {
      "functionId": "512fed64-e379-400f-a1a5-14d5730xxxxx",
      "functionName": "routing-strategy-test-2"
    }`
     */
    "StrategyParams"?: string;
    /**
     * 转接目的类型，可选值为AGENT，SKILL_GROUP，IVR和EXTERNAL_NUMBER。如果此参数不传，则系统会根据转接的目标号码的格式进行判断，如果发现有判不准确的情况，则需要指定此参数。
     * @example `SKILL_GROUP`
     */
    "TransfereeType"?: string;
    /**
     * 传递给联系流的变量，选填，这里配置的变量，可以在IVR流程中拿到并使用，格式为JSON字符串格式的键值对集合。
     * @example `{"name":"王先生","time":"19点20分","address":"某某中心"}`
     */
    "ContactFlowVariables"?: string;
    "RoutingType"?: string;
    "Tags"?: string;
    "QueuingTimeoutSeconds"?: number;
    "QueuingOverflowThreshold"?: number;
}
