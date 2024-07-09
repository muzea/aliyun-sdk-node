export interface CopySceneResponse {
    /**
     * 请求ID
     * @example `4F882EA7-3A1D-0113-94E4-70162C4B***`
     */
    RequestId: string;
    /**
     * 返回码，200：成功，其他：失败
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 任务ID
         * @example `yuywey****`
         */
        TaskId: string;
    };
}
