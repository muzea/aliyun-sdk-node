export interface InstallGlobalAppResponse {
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
     * 安装后应用名
     * @example `InstalledApp`
     */
    InstalledAppName: string;
    /**
     * 工作空间
     * @example `TestWorkspace`
     */
    Workspace: string;
    /**
     * 区域名
     * @example `cn-beijing`
     */
    RegionId: string;
}
