export interface UpdateTopicConfigResponse {
    /**
     * Id of the request
     * @example `0178A3A7-E87B-5E50-A16F-3E62F534****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码，正常返回200。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 返回结果。
     * @example `[]`
     */
    Data: string;
}
