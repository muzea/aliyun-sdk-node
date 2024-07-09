export interface GetCommonSwitchConfigRequest {
    /**
     * 通用开关类型。
     * >通过[ListClientUserDefineRules](~~ListClientUserDefineRules~~)、[ListSystemClientRules](~~ListSystemClientRules~~)接口的响应参数SwitchId可以获取该参数。
     * @example `USER-DEFINE-RULE-SWITCH-TYPE_180****`
     */
    "Type"?: string;
}
