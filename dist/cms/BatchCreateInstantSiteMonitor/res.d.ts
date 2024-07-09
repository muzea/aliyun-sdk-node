export interface BatchCreateInstantSiteMonitorResponse {
    /**
     * 请求ID。
     * @example `7AE72720-2C96-5446-9F2B-308C7CEDFF1A`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 操作是否成功。取值：
     * * true：成功。
     * * false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 站点监控任务信息。
     * @example `[{"taskName": "HangZhou_ECS1", "taskId": "679fbe4f-b80b-4706-91b2-5427b43e****"}]`
     */
    Data: {
        /**
         * 站点监控任务名称。
         * @example `HangZhou_ECS1`
         */
        TaskName: string;
        /**
         * 站点监控任务ID。
         * @example `679fbe4f-b80b-4706-91b2-5427b43e****`
         */
        TaskId: string;
    }[];
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
}
