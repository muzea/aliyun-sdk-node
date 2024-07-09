export interface DescribeLogShipperStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413****`
     */
    RequestId: string;
    /**
     * 日志投递状态集合。
     */
    LogShipperStatus: {
        /**
         * 日志分析开通状态。取值：
         * - **yes**：投递
         * - **no**：未投递
         * @example `yes`
         */
        OpenStatus: string;
        /**
         * SLS服务开通状态。取值：
         * - **yes**：开通
         * - **no**：未开通
         * @example `yes`
         */
        SlsServiceStatus: string;
        /**
         * 日志分析服务授权状态。取值：
         * - **yes**：授权
         * - **no**：未授权
         * @example `yes`
         */
        AuthStatus: string;
        /**
         * 日志分析服务购买状态。取值：
         * - **yes**：购买
         * - **no**：未购买
         * @example `yes`
         */
        BuyStatus: string;
        /**
         * 日志分析后付费支持状态。取值：
         * - **yes**：支持
         * - **no**：未支持
         * @example `yes`
         */
        PostPaidSupportStatus: string;
        /**
         * 日志分析后付费开通状态。取值：
         * - **yes**：开通
         * - **no**：未开通
         * @example `no`
         */
        PostPaidOpenStatus: string;
        /**
         * 日志分析所使用的日志项目状态。取值：
         * - **Normal**：正常
         * - **Disable**：禁用
         * @example `Normal`
         */
        SlsProjectStatus: string;
    };
}
