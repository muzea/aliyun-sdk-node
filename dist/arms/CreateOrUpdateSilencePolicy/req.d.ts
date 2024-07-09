export interface CreateOrUpdateSilencePolicyRequest {
    /**
     * 静默策略ID。
     * - 不填代表创建新的静默策略。
     * - 填写代表修改指定静默策略信息。
     * @example `1234`
     */
    "Id"?: number;
    /**
     * 静默策略名称。
     * @example `silencepolicy_test`
     */
    "Name": string;
    /**
     * 设置分派规则。格式如下：
     * ```
     * [
     *      {
     * 	 "matchingConditions": [
     * 	 {
     * 	 "value": "test",      //分派规则条件Value。
     * 	 "key": "altertname",     //分派规则条件Key。
     * 	 "operator": "eq"      //分派规则条件聚合方式，包括eq（等于）、neq（不等于）、in（包含）、nin（不包含）、re（匹配正则）、nre（正则不匹配）。
     * 	 }
     * 	 ]
     *      }
     * 	 ]
     * ```
     * @example `[ 	 { 	 "matchingConditions": [ 	 { 	 "value": "test", 	 "key": "altertname", 	 "operator": "eq" 	 } 	 ]      } 	 ]`
     */
    "MatchingRules"?: string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 静默策略是否启用，enable 启用，disable 停用
     * @example `enable`
     */
    "State"?: string;
}
