export interface ModifyDcdnWafRuleRequest {
    /**
     * 防护规则ID，仅支持单个输入。
     * @example `200001`
     */
    "RuleId": number;
    /**
     * 修改后的防护规则状态，取值：
     * - **on**：开启。
     * - **off**：关闭。
     * @example `off`
     */
    "RuleStatus"?: string;
    /**
     * 修改后的防护规则名称。
     * @example `test`
     */
    "RuleName"?: string;
    /**
     * 修改后的防护规则配置。
     * >上传修改后的配置规则后，会直接覆盖之前的配置。
     * @example `{"origin":"custom","conditions":[{"opValue":"eq","key":"URL","values":"/example"},{"opValue":"eq","key":"Header","values":"3333","subKey":"trt"}],"actionExternal":{},"action":"monitor","ccStatus":1,"ratelimit":{"target":"remote_addr","interval":"5","threshold":"2","effect":"rule","status":{"code":"404","count":"2"},"ttl":"1800"}}'`
     */
    "RuleConfig"?: string;
}
