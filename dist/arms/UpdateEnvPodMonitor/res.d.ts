export interface UpdateEnvPodMonitorResponse {
    /**
     * Id of the request。
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * target匹配提示信息。
         * @example `匹配成功。`
         */
        MatchedMsg: string;
        /**
         * 匹配出的targets数量。
         * @example `1`
         */
        MatchedTargetCount: string;
    };
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
