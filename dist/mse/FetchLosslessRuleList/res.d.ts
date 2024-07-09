export interface FetchLosslessRuleListResponse {
    /**
     * 请求ID。
     * @example `56D9E600-6348-4260-B35F-583413F****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `Success`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `36`
         */
        TotalSize: number;
        /**
         * 返回数据。
         */
        Results: {
            /**
             * 应用名称。
             * @example `echo-demo`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `hkhon1po62@24810bf4364a***`
             */
            AppId: string;
            /**
             * 实例数量。
             * @example `3`
             */
            Count: number;
            /**
             * 无损上线启用状态。取值：
             * - `true`：启用。
             * - `false`：禁用。
             * @example `true`
             */
            Enable: boolean;
            /**
             * 预热时长（秒）。
             * @example `60`
             */
            WarmupTime: number;
            /**
             * 延迟注册时间（秒）。
             * @example `60`
             */
            DelayTime: number;
            /**
             * 预热曲线斜率。
             * @example `2`
             */
            FuncType: number;
            /**
             * 是否开启“通过就绪检查前完成服务注册”。
             * @example `true`
             */
            Aligned: boolean;
            /**
             * 是否开启“通过就绪检查前完成服务预热”。
             * @example `false`
             */
            Related: boolean;
            /**
             * 是否开启上下线处理明细。
             * @example `false`
             */
            LossLessDetail: boolean;
            /**
             * 是否开启主动通知。
             * @example `true`
             */
            Notice: boolean;
        }[];
    };
}
