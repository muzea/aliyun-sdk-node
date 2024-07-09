export interface CreateWorkspaceRequest {
    /**
     * 工作空间名称
     * @example `Demo`
     */
    "name"?: string;
    /**
     * 技术栈
     * @example `all-in-one`
     */
    "workspaceTemplate": string;
    /**
     * 代码来源URL（当前仅支持云效 Codeup 来源）
     * @example `git@codeup.aliyun.com:demo/Codeup-Demo.git`
     */
    "codeUrl": string;
    /**
     * 代码版本，支持 commitSHA、分支、标签
     * @example `master`
     */
    "codeVersion": string;
    /**
     * 打开空间默认打开的文件相对路径
     * @example `src/Test.java`
     */
    "filePath"?: string;
    /**
     * 工作空间复用标识，按照"用户+技术栈+代码地址+版本"进行复用
     * - true-复用
     * - false-不复用，每次均为新创建
     * @example `false`
     */
    "reuse"?: boolean;
    /**
     * 资源标识，提供给非标代码源作为空间复用的唯一标识
     * @example `acs:fc:cn-shenzhen:XXX:services/demo.LATEST/functions/demo`
     */
    "resourceIdentifier"?: string;
    /**
     * 请求来源（用于统计，云产品集成时需要传入）
     * @example `fc`
     */
    "requestFrom"?: string;
}
