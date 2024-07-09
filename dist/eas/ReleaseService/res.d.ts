export interface ReleaseServiceResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * @example `Releasing service [foo] in region [cn-shanghai] with weight [40], service status: [Running]`
     */
    Message: string;
}
