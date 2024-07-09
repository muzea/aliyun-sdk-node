export interface PushMonitorResponse {
    /**
     * 返回结果 正常返回null。
     * @example `null`
     */
    data: any;
    /**
     * 每个请求的唯一id。
     * @example `5A30D240-1821-0246-B580-AB1468657AD2`
     */
    requestId: string;
}
