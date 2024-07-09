export interface InitiateAttendedTransferRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起咨询转接的坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `ACC-YUNBS-1.0.10-****`
     */
    "DeviceId"?: string;
    /**
     * 转接发起方，当场景是咨询转接到外部号码时，用此参数指定的号码作为主叫，转内部坐席或技能组时，此参数无效，发起方由UserId指定。
     * @example `无`
     */
    "Transferor"?: string;
    /**
     * 被转接方，可以是坐席ID或技能组ID。
     * @example `agent2@ccc-test`
     */
    "Transferee": string;
    /**
     * 咨询转接超时时间，超过指定时间被转接方没有接起通话，则挂断通话，此字段选填，默认30，单位秒。
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
     * 转接目的类型，可选值为AGENT，SKILL_GROUP和EXTERNAL。如果此参数不传，则系统会根据转接的目标号码的格式进行判断，如果发现有判不准确的情况，则需要指定此参数。
     * @example `SKILL_GROUP`
     */
    "TransfereeType"?: string;
    /**
     * 话务分配类型，可选参数为自动分配(Automatic)或者手动分配(Manual)。如果此参数为空，则默认为自动分配的方式，这也是当前系统的默认行为。选择手动分配方式时，需要您自己配合调用ClaimCall等接口把电话分给指定的座席。
     * @example `Automatic`
     */
    "RoutingType"?: string;
    /**
     * 随路数据，主要用于扩展需求，普通用户无需关心。
     * @example `a=b`
     */
    "Tags"?: string;
    /**
     * 当转接目标是技能组队列时排队超时时间，单位为秒。
     */
    "QueuingTimeoutSeconds"?: number;
    /**
     * 当转接目标是技能组队列时排队溢出阈值。默认值为0，表示不溢出。
     */
    "QueuingOverflowThreshold"?: number;
}
