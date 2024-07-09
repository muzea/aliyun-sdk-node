export interface RetryDocRequest {
    /**
     * 业务空间key，不传时访问默认业务空间，key值在主账号业务管理页面获取
     * @example `e2a20f74cd9042558002c0f7dc873739_p_outbound_public`
     */
    "AgentKey"?: string;
    /**
     * 知识ID
     * @example `30001905617`
     */
    "KnowledgeId": number;
}
