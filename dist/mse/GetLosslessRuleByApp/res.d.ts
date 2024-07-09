export interface GetLosslessRuleByAppResponse {
    /**
     * 请求ID。
     * @example `DC34E4A3-5F1C-4E40-86EA-02EDF967****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - true：请求成功。
     * - false：请求失败。
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
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 应用名称。
         * @example `spring-cloud-a`
         */
        AppName: string;
        /**
         * 应用ID。
         * @example `hkhon1po62@24810bf4364a***`
         */
        AppId: string;
        /**
         * 实例数量。
         * @example `1`
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
         * @example `120`
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
         * @example `true`
         */
        LossLessDetail: boolean;
        /**
         * 是否开启主动通知。
         * @example `false`
         */
        Notice: boolean;
    };
}
