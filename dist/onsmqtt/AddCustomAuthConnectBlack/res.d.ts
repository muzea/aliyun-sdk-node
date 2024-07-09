export interface AddCustomAuthConnectBlackResponse {
    /**
     * Id of the request
     * @example `82B9E503-F4A1-4F30-976F-C6999FF9****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
}
