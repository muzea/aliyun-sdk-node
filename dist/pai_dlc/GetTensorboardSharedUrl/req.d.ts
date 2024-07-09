export interface GetTensorboardSharedUrlRequest {
    /**
     * Tensorboard任务的ID。
     * @example `tbxxxxxx`
     */
    "TensorboardId": string;
    /**
     * 分享链接的有效时长，单位：秒。最大值为604800。
     * @example `86400`
     */
    "ExpireTimeSeconds"?: string;
}
