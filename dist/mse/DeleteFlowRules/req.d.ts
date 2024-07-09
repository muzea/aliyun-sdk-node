export interface DeleteFlowRulesRequest {
    /**
     * 应用所属的微服务命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 待删除的规则ID列表。
     * @example `[1,2]`
     */
    "Ids": number[];
    /**
     * 应用名称。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
