export interface DescribeCategoryRequest {
    /**
     * 类目ID
     * @example `30000049006`
     */
    "CategoryId": number;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
