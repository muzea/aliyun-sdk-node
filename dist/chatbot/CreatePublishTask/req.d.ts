export interface CreatePublishTaskRequest {
    /**
     * 发布单元类型，机器人发布请使用 CreateInstancePublishTask API
     * @example `faq`
     */
    "BizType"?: string;
    /**
     * 附加发布信息，当前支持：如果BizType是faq，此字段填写类目ID，表示只发布这些类目下面的知识
     * @example `["8521"]`
     */
    "DataIdList"?: string[];
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
