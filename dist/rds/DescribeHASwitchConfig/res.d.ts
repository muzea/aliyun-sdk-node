export interface DescribeHASwitchConfigResponse {
    /**
     * 请求ID。
     * @example `4FDF4B79-2741-4C5F-8C76-4B953FC5C2B1`
     */
    RequestId: string;
    /**
     * 临时关闭截止时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-08-29T15:00:00Z`
     */
    ManualHATime: string;
    /**
     * 主备自动切换设置，取值：
     * * **Auto**：出现故障时自动切换主备实例。
     * * **Manual**：已临时关闭自动切换。
     * @example `Manual`
     */
    HAConfig: string;
}
