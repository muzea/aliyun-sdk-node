export interface InitAppFailOverResponse {
    /**
     * 请求ID
     * @example `A07FFDF2-78FA-1B48-9E38-88E833A93187`
     */
    RequestId: string;
    /**
     * 报错信息
     * @example `Unsupported Operation PrepareEvent->FailOverPrepareSuccess FoApp_DDLJK2WM8ETU9JAC`
     */
    Message: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 返回容灾切换任务ID（TaskId）
     * @example `7250`
     */
    Data: number;
}
