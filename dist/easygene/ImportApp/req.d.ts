export interface ImportAppRequest {
    /**
     * 来源
     * @example `easygene:opengene/fastp`
     */
    "Source": string;
    /**
     * 工作空间
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * 安装后应用名
     * @example `fastp`
     */
    "AppName": string;
}
