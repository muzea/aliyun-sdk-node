export interface StartK8sAppPrecheckResponse {
    /**
     * 请求ID。
     * @example `7638276F-****-****-884F-54CC0BC84A8D`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息 。
     * @example `success`
     */
    Message: string;
    /**
     * 接口返回数据。
     */
    Data: {
        /**
         * 任务列表及任务详情。
         */
        Jobs: string[];
    };
}
