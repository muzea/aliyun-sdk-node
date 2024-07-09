export interface GetCodeSourceResponse {
    /**
     * 代码源配置ID。
     * @example `code-202**********`
     */
    CodeSourceId: string;
    /**
     * 代码源配置名字。
     * @example `MyCodeSource1`
     */
    DisplayName: string;
    /**
     * 代码配置的详细描述。
     * @example `This is my data source 1.`
     */
    Description: string;
    /**
     * 代码仓库地址。
     * @example `https://code.aliyun.com/pai-dlc/examples.git`
     */
    CodeRepo: string;
    /**
     * 代码仓库分支。
     * @example `master`
     */
    CodeBranch: string;
    /**
     * 代码CommitId。
     * @example `44da10***********`
     */
    CodeCommit: string;
    /**
     * 代码仓库的用户名。
     * @example `user1`
     */
    CodeRepoUserName: string;
    /**
     * 访问代码仓库的Token。
     * @example `xxxx`
     */
    CodeRepoAccessToken: string;
    /**
     * 代码的本地挂载目录。
     * @example `/root/code`
     */
    MountPath: string;
    /**
     * 代码配置的可见性，可能值：
     * - PRIVATE：在此工作空间中，仅对您和管理员可见。
     * - PUBLIC： 在此工作空间中，对所有人可见。
     * @example `PRIVATE`
     */
    Accessibility: string;
    /**
     * 代码配置源的创建者ID。
     * @example `1722********`
     */
    UserId: string;
    /**
     * 工作空间ID。
     * @example `1234`
     */
    WorkspaceId: string;
    /**
     * 代码配置创建时间，时间格式为ISO8601。
     * @example `2021-01-12T23:36:01.123Z`
     */
    GmtCreateTime: string;
    /**
     * 代码配置修改时间。时间格式为ISO8601。
     * @example `2021-01-12T23:36:01.123Z`
     */
    GmtModifyTime: string;
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
}
