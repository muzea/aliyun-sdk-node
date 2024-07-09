export interface CreateInstantSiteMonitorResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `68192f5d-0d45-4b98-9724-892813f86c71`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * * true：成功。
     * * false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 创建一次性探测任务的结果列表。
     */
    CreateResultList: {
        /**
         * 探测任务ID。
         * @example `2c8dbdf9-a3ab-46a1-85a4-f094965e****`
         */
        TaskId: string;
        /**
         * 探测任务名称。
         * @example `task1`
         */
        TaskName: string;
    }[];
}
