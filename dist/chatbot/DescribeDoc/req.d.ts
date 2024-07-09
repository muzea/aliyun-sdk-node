export interface DescribeDocRequest {
    /**
     * 业务空间key，不传时访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 知识ID
     * @example `30001979424`
     */
    "KnowledgeId": number;
    /**
     * 是否展示文档段落详细信息
     * true：展示
     * false：忽略（默认）
     * @example `false`
     */
    "ShowDetail"?: boolean;
}
