export interface ListExperimentsResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 是否为默认实验。
         * @example `true`
         */
        base: boolean;
        /**
         * 实验上线时间。
         * @example `2020-12-07T06:47:30.000Z`
         */
        onlineTime: string;
        /**
         * 实验下线时间。
         * @example `2020-12-07T06:47:30.000Z`
         */
        offlineTime: string;
        /**
         * 实验备注。
         * @example `xxx`
         */
        description: string;
        /**
         * 实验状态。
         * 取值：
         * - **Init**：未上线。
         * - **Online**：上线。
         * - **Finish**：推全。
         * - **Offline**：下线。
         * @example `init`
         */
        status: string;
        /**
         * 实验名称。
         * @example `test`
         */
        name: string;
        /**
         * 分桶列表，上线实验时该字段才生效。
         */
        buckets: string[];
        /**
         * 实验ID。
         * @example `123`
         */
        experimentId: string;
    }[];
    /**
     * 请求ID。
     * @example `E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B`
     */
    requestId: string;
}
