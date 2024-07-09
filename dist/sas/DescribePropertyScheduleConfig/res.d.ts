export interface DescribePropertyScheduleConfigResponse {
    /**
     * 配置时间。单位：小时。
     * > 该值为**0**时，表示关闭了该类型的资产指纹扫描。
     * @example `3`
     */
    Config: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
}
