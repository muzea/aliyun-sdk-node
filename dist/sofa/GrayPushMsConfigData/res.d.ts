export interface GrayPushMsConfigDataResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 推送结果列表
     */
    PushResult: {
        /**
         * 是否推送成功
         * @example `true`
         */
        Success: boolean;
        /**
         * 推送目标 host
         * @example `127.0.0.1`
         */
        Host: string;
    }[];
}
