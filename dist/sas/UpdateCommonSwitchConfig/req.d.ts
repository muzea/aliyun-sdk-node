export interface UpdateCommonSwitchConfigRequest {
    /**
     * 通用开关类型。
     * >通过[ListClientUserDefineRules](~~ListClientUserDefineRules~~)、[ListSystemClientRules](~~ListSystemClientRules~~)接口的响应参数SwitchId可以获取该参数。
     * @example `USER-DEFINE-RULE-SWITCH-TYPE_190****`
     */
    "Type"?: string;
    /**
     * 默认是否生效。取值：
     * - **add**：新增主机默认生效。
     * - **del**：新增主机默认不生效。
     * @example `add`
     */
    "TargetDefault"?: string;
}
