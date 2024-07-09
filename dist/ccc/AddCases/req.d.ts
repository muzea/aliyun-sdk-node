export interface AddCasesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动ID。
     * @example `c58b9719-3bc3-441d-a4d3-fc0309ef7066
    `
     */
    "CampaignId": string;
    /**
     * 外呼名单列表。
     */
    "CaseList"?: {
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
         * @example `{"name":"customer","客户标签":"tag"}
        `
         */
        CustomVariables: string;
        /**
         * 脱敏后的被叫号码，如果该字段不为空，表示需要对被叫号码脱敏，脱敏规则由客户自行定义，只需将脱敏后的被叫号码填入即可，使用脱敏被叫会导致某些场景下看到的是脱敏后的被叫号码，无法查看真实被叫号码。
         * @example `166******66`
         */
        MaskedCallee: string;
        /**
         * 主叫号码，该字段指定号码后，对应联系人将会使用对应的号码进行外呼，不再随机选择号码。
         * @example `185022xxxx`
         */
        Caller: string;
    }[];
}
