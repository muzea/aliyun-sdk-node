export interface UpdateFaqRequest {
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 知识ID
     * @example `30001905617`
     */
    "KnowledgeId": number;
    /**
     * 知识的类目ID
     * @example `30000049006`
     */
    "CategoryId": number;
    /**
     * 知识标题
     * @example `测试标题`
     */
    "Title": string;
    /**
     * 生效时间
     * @example `2022-05-27T05:18:20Z`
     */
    "StartDate"?: string;
    /**
     * 失效时间
     * @example `2030-12-31T16:00:00Z`
     */
    "EndDate"?: string;
}
