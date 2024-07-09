export interface CreateTensorboardResponse {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-xxxxxxxx`
     */
    JobId: string;
    /**
     * 数据集ID。
     * @example `ds-20210126170216-xxxxxxxx`
     */
    DataSourceId: string;
    /**
     * Tensorboard ID。
     * @example `tbxxxxxxxx`
     */
    TensorboardId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
