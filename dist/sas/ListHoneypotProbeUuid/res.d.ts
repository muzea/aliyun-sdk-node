export interface ListHoneypotProbeUuidResponse {
    /**
     * 探针对应的资源列表。
     */
    Data: string[];
    /**
     * 总条数。
     * @example `10`
     */
    Count: number;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `32C9C2A6-B837-538E-921B-90746CB*****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
