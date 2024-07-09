export interface CreateTemplateResponse {
    /**
     * 工作空间名称
     * @example `test-workspace`
     */
    Workspace: string;
    /**
     * 应用模板名称
     * @example `test-template`
     */
    TemplateName: string;
    /**
     * 主机 ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求 ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
}
