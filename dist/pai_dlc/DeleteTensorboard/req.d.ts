export interface DeleteTensorboardRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `46099`
     */
    "WorkspaceId"?: string;
    /**
     * Tensorboard ID。如何获取Tensorboard ID，请参见[ListTensorboards](~~459689~~)。
     * @example `tensorboard-20210114104214-xxxxxxxx`
     */
    "TensorboardId": string;
}
