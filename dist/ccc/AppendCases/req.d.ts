export interface AppendCasesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动ID。
     * @example `78cf6864-9a22-4ea8-a59d-5adc2d747b0e`
     */
    "CampaignId": string;
    /**
     * 外呼名单列表，Body参数。
     */
    "body"?: {
        /**
         * 业务ID，客户业务系统标识，用于集成场景。
         * @example `01`
         */
        ReferenceId: string;
        /**
         * 联系人电话号码。
         * @example `188888****`
         */
        PhoneNumber: string;
        /**
         * 客户自定义变量，格式为JSON对象，对象最多包含10个属性，每个属性的名称和值均由客户自定义。
         * @example `{
              "name": "customer",
              "客户标签": "tag"
        }`
         */
        CustomVariables: string;
        /**
         * 脱敏后的被叫号码，如果该字段不为空，表示需要对被叫号码脱敏，脱敏规则由客户自行定义，只需将脱敏后的被叫号码填入即可，使用脱敏被叫会导致某些场景下看到的是脱敏后的被叫号码，无法查看真实被叫号码。
         * @example `071*****801`
         */
        MaskedCallee: string;
        /**
         * 主叫号码，该字段若不为空，外呼式会优先使用传入的号码作为主叫发起呼叫；该字段若为空，系统会自动选取主叫发起呼叫。
         * @example `01012345678`
         */
        Caller: string;
        /**
         * 坐席ID，指定的转接坐席，该字段不为空，系统会将改电话转至对应坐席；该字段若为空，系统会分配给技能组中的空闲坐席。
         * @example `agent@ccc-test`
         */
        AgentId: string;
    }[];
}
