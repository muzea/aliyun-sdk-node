export interface CreateCategoryRequest {
    /**
     * 类目名称
     * @example `测试1`
     */
    "Name": string;
    /**
     * 业务代码
     * @example `bizcode123`
     */
    "BizCode"?: string;
    /**
     * 知识类型，FAQ类目：1，文档类目：3，默认1
     * @example `1`
     */
    "KnowledgeType"?: number;
    /**
     * 父类目ID，默认-1，对应根目录
     * @example `-1`
     */
    "ParentCategoryId"?: number;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
