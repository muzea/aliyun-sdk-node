export interface PullCashierResponse {
    /**
     * 返回的错误码，`0`表示成功。
     * @example `0`
     */
    RetCode: number;
    /**
     * 返回的错误信息，成功则不返回信息。
     * @example `请求成功`
     */
    RetMsg: string;
    /**
     * 拉取收银台的结果，true表示成功，false表示失败。
     * @example `true`
     */
    RetValue: boolean;
}
