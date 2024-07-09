export interface GetTensorboardSharedUrlResponse {
    /**
     * Request ID。用于问题查询和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * Tensorboard的任务分享链接。
     * @example `http://pai-dlc-proxy-xxx.alicyuncs.com/xxx/xxx/token/`
     */
    TensorboardSharedUrl: string;
}
