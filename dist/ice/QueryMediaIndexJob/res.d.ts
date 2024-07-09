export interface QueryMediaIndexJobResponse {
    /**
     * 请求ID。
     * @example `4E84BE44-58A7-****-****-FBEBEA16EF94`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - true： 成功
     * - false：失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 索引任务信息列表。
     */
    IndexJobInfoList: {
        /**
         * 提交时间。
         * @example `2023-11-21 11:33:50`
         */
        GmtSubmit: string;
        /**
         * 结束时间。
         * @example `2023-11-21 11:33:51`
         */
        GmtFinish: string;
        /**
         * 索引类别。取值：
         * - mm：大模型。
         * - face：人脸。
         * - aiLabel：智能标签。
         * @example `mm`
         */
        IndexType: string;
        /**
         * 任务状态，取值：
         * - Running：运行中。
         * - Success: 成功。
         * - Fail: 失败。
         * @example `Success`
         */
        Status: string;
    }[];
}
