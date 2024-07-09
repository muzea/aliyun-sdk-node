export interface DescribeLoginSwitchConfigsResponse {
    /**
     * 配置列表的返回个数信息。
     * @example `2`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF4****`
     */
    RequestId: string;
    /**
     * 返回的配置对象。
     */
    ConfigList: {
        /**
         * 日志服务的启用状态。
         * 取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `0`
         */
        Status: number;
        /**
         * 指定要开启或关闭的开关类型。
         * 取值：
         * - **login\_common\_ip**：  非常用登录IP告警
         * - **login\_common\_time**： 非常用登录时间告警
         * - **login\_common\_account**： 非常用账号登录告警
         * @example `login_common_ip`
         */
        Item: string;
    }[];
}
