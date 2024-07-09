export interface GetClusterAllUrlResponse {
    /**
     * JSON格式的返回结果。
     * @example `{
      "RequestId": "41877338-646B-5DD6-BFBE-F89F1E7245AD",
      "Data": "{\"clusterType\":\"ManagedKubernetes\",\"remoteWriteUrl\":\"http:/" }`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `40B10E04-81E8-4643-970D-F1B38F2E****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 查询是否成功：true：成功。                                 false：失败。
     * @example `true`
     */
    Success: boolean;
}
