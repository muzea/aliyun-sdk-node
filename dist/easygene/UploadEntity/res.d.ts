export interface UploadEntityResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 工作空间
     * @example `test-workspace`
     */
    Workspace: string;
    /**
     * 表格名称
     * @example `sample`
     */
    EntityType: string;
}
