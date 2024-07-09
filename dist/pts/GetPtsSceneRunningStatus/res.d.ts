export interface GetPtsSceneRunningStatusResponse {
    /**
     * 场景状态。包括：
     * - CREATED
     * - SYNCING
     * - SYNC_DONE
     * - UPLOADING
     * - UPLOADED
     * - PREPARING
     * - READY
     * - RUNNING
     * - STOPPING
     * - STOPPED
     * @example `RUNNING`
     */
    Status: string;
    /**
     * 修改时间。
     * @example `2021-03-26 16:03:56`
     */
    ModifiedTime: string;
    /**
     * 请求ID。
     * @example `DC4E3177-6745-4925-B423-4E89VV34221A`
     */
    RequestId: string;
    /**
     * 错误提示消息，若成功则不返回任何数据。
     * @example `创建或者修改场景入参必须是实体类Scene的JSON串`
     */
    Message: string;
    /**
     * 场景名。
     * @example `下单场景`
     */
    SceneName: string;
    /**
     * 创建时间。
     * @example `2021-03-01 16:05:56`
     */
    CreateTime: string;
    /**
     * 请求状态码，若成功则不返回任何数据。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码，若成功则不返回任何数据。
     * @example `4001`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `false`
     */
    Success: boolean;
}
