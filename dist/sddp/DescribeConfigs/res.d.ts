export interface DescribeConfigsResponse {
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 异常告警通用配置项列表。
     */
    ConfigList: {
        /**
         * 异常告警通用配置模块中配置项的编码。
         * @example `1`
         */
        Code: string;
        /**
         * 异常告警通用配置项的参数值。
         * @example `30`
         */
        Value: string;
        /**
         * 异常告警通用配置项参数的默认值描述。
         * @example `当日某类日志输出量低于前10天平均值的30%`
         */
        DefaultValue: string;
        /**
         * 异常告警通用配置项的描述。
         * @example `日志未有效输出`
         */
        Description: string;
        /**
         * 异常告警通用配置项的唯一标识ID。
         * @example `2133`
         */
        Id: number;
    }[];
}
