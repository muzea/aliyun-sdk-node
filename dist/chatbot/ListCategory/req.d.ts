export interface ListCategoryRequest {
    /**
     * 知识类型,FAQ类目:1,文档类目:3，默认1
     * @example `1`
     */
    "KnowledgeType"?: number;
    /**
     * 父类目ID
     * @example `-1`
     */
    "ParentCategoryId"?: number;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
