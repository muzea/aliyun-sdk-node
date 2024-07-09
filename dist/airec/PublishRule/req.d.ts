export interface PublishRuleRequest {
    /**
     * 规则ID。
     * @example `98493A14-D619-4E88-9F8D-108939817F9F`
     */
    "ruleId": string;
    /**
     * 规则类型：
     * **selection：**选品规则
     * **operation：**运营规则
     * **top：**置顶规则
     * **fixed：**定坑规则
     * @example `selection`
     */
    "ruleType": string;
    /**
     * 场景ID。
     * @example `test`
     */
    "sceneId": string;
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
}
