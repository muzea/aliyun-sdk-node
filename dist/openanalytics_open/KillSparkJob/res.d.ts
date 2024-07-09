export interface KillSparkJobResponse {
    /**
     * 执行结果，`deleted`代表执行成功。
     * @example `deleted`
     */
    Data: string;
    /**
     * 请求的唯一ID。
     * @example `3970ACB5-3E30-4A3A-B63A-1790FCC261F4`
     */
    RequestId: string;
}
