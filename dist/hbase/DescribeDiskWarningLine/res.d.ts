export interface DescribeDiskWarningLineResponse {
    /**
     * 磁盘容量告警线，如配置75，则表示磁盘使用率超过75%时会报警。未返回时说明用户还没有配置，系统默认为80%。
     * @example `80`
     */
    WarningLine: string;
    /**
     * 请求id。
     * @example `08DF8283-D290-4107-931E-7913D6D3480D`
     */
    RequestId: string;
}
