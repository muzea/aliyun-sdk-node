export interface CreateAppResponse {
    /**
     * 工作空间
     * @example `TestWorkspace`
     */
    Workspace: string;
    /**
     * 应用名称
     * @example `TestApp`
     */
    AppName: string;
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
    /**
     * 应用版本号
     * @example `1`
     */
    Revision: string;
    /**
     * 应用版本唯一标签
     * @example `ProduceVersion`
     */
    RevisionTag: string;
}
