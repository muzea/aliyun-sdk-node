export interface GetTensorboardRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `46099`
     */
    "WorkspaceId"?: string;
    /**
     * TensorboardId ID。如何获取Tensorboard ID，请参见[ListTensorboards](~~459689~~)。
     * @example `tb-20210114104214-xxxxx`
     */
    "TensorboardId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-xxxxxxxx`
     */
    "JodId"?: string;
    /**
     * 分享令牌信息，填入该参数可利用分享令牌信息获得查看某个Tensorboard任务的权限。可通过执行[GetTensorboardSharedUrl](~~2557813~~)，在获得的链接中提取。
     * @example `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e
    yJleHAiOjE2OTUyODA0NTMsImlhdCI6MTY5NTE5NDA1MywidXNlcl9pZCI6IjExN
    Tc3MDMyNzA5OTQ5MDEiLCJ0YXJnZXRfaWQiOiJ0YjRrOGxjNXhmdTM2b3B0Iiw
    idGFyZ2V0X3R5cGUiOiJ0ZW5zb3Jib2FyZCJ9.6eT68J-KMBwwfN2d7fj7u6vyPcf0erfqYeizd2N****`
     */
    "Token"?: string;
}
