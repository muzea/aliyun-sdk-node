export interface DeployFunctionFileRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 函数文件ID
     * @example `35`
     */
    "FileId": string;
    /**
     * 部署环境，**0**：沙箱环境；**1**：生产环境。
     * @example `0`
     */
    "DeployEnv": number;
}
