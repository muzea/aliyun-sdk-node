export interface DeleteProjectMemberRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `27`
     */
    "ProjectId": number;
    /**
     * 用户ID。
     * @example `1234`
     */
    "UserId": string;
}
