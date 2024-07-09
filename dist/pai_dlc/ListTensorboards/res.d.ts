export interface ListTensorboardsResponse {
    /**
     * Tensorboard列表。
     */
    Tensorboards: any[];
    /**
     * 符合条件的数据源总数量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
