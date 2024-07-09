export interface UpdateConnQuestionRequest {
    /**
     * 关联知识ID
     * @example `1000000295`
     */
    "ConnQuestionId": number;
    /**
     * 关联关系ID
     * @example `877397683`
     */
    "OutlineId": number;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
