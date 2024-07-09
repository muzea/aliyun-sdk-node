export interface StartServiceResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * @example `Service [foo] in region [cn-shanghai] is starting`
     */
    Message: string;
}
