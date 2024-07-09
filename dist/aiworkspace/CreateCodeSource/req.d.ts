export interface CreateCodeSourceRequest {
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `1234`
         */
        WorkspaceId: string;
        /**
         * 代码配置名称。
         * @example `MyCodeSource1`
         */
        DisplayName: string;
        /**
         * 代码配置的描述信息，便于区分不同的代码配置。
         * @example `code source of dlc examples`
         */
        Description: string;
        /**
         * 代码仓库地址。
         * @example `https://code.aliyun.com/******`
         */
        CodeRepo: string;
        /**
         * 代码仓库的用户名。
         * @example `use***`
         */
        CodeRepoUserName: string;
        /**
         * 代码仓库访问Token。
         * @example `***`
         */
        CodeRepoAccessToken: string;
        /**
         * 代码分支。
         * @example `master`
         */
        CodeBranch: string;
        /**
         * 代码本地挂载目录，默认挂载到/root/code/下。
         * @example `/root/code/code-source-1`
         */
        MountPath: string;
        /**
         * 代码配置的可见性，取值如下。
         * - PUBLIC：在此工作空间中，对所有人可见。
         * - PRIVATE：在此工作空间中，仅对您和管理员可见。
         * @example `PRIVATE`
         */
        Accessibility: string;
    };
}
