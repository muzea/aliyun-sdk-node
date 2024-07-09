export interface CreateFaqRequest {
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 知识的类目ID
     * @example `1000053274`
     */
    "CategoryId": number;
    /**
     * 知识标题，字数上限：120字
     * @example `测试标题`
     */
    "Title": string;
    /**
     * 生效时间
     * @example `2022-05-25T16:28:36Z`
     */
    "StartDate"?: string;
    /**
     * 失效时间
     * @example `2030-12-31T16:00:00Z`
     */
    "EndDate"?: string;
    /**
     * 默认答案内容（如果兜底视角开启，则此项必填）
     * @example `测试答案`
     */
    "SolutionContent"?: string;
    /**
     * 默认答案类型：0-纯文本，1-富文本
     * @example `0`
     */
    "SolutionType"?: number;
}
