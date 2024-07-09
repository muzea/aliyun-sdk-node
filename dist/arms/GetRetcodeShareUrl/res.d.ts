export interface GetRetcodeShareUrlResponse {
    /**
     * 前端监控站点的分享地址。
     * @example `http://arms-daily.console.aliyun.com:8080/shareapi/retcode.json?login_arms_t3h_token=XXXxxx&action=RetcodeAction&eventSubmitDoGetData=1`
     */
    Url: string;
    /**
     * 请求ID。
     * @example `01FF8DD9-A09C-47A1-895A-B6E321BE77B6`
     */
    RequestId: string;
}
