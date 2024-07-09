export interface TagAppResponse {
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 工作空间名称
     * @example `TestWorkspace`
     */
    Workspace: string;
    /**
     * 应用名称
     * @example `TestApp`
     */
    AppName: string;
    /**
     * 应用版本
     * @example `1`
     */
    AppRevision: string;
    /**
     * 应用版本唯一标签
     * @example `ProduceVersion`
     */
    RevisionTag: string;
    /**
     * 此前拥有该标签的应用版本
     * @example `0`
     */
    FormerRevision: string;
    /**
     * 该应用版本此前的唯一标签
     * @example `TestTag`
     */
    FormerTag: string;
}
