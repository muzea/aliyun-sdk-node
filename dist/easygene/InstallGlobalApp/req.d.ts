export interface InstallGlobalAppRequest {
    /**
     * 来源
     * @example `EasyGene`
     */
    "Source": string;
    /**
     * 命名空间名称
     * @example `sentieon`
     */
    "NamespaceName": string;
    /**
     * 应用名称
     * @example `joint-calling`
     */
    "AppName": string;
    /**
     * 工作空间
     * @example `default-workspace`
     */
    "Workspace": string;
    /**
     * 安装后应用名
     * @example `joint-calling`
     */
    "InstalledAppName": string;
}
