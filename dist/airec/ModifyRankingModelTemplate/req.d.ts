export interface ModifyRankingModelTemplateRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 排序模型模板ID
     * @example `a-a-a`
     */
    "templateId": string;
    /**
     * 配置信息
     * @example `{}`
     */
    "body"?: any;
}
