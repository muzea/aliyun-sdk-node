export interface VideoAppReportResponse {
    /**
     * 返回的错误码，`0`表示成功。
     * @example `0`
     */
    RetCode: number;
    /**
     * 返回的错误信息，成功则不返回信息。
     * @example `请求异常`
     */
    RetMsg: string;
    /**
     * 返回的调用结果
     * - true表示成功
     * - false表示失败
     * @example `true`
     */
    RetValue: boolean;
}
