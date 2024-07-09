export interface GetMseSourceResponse {
    /**
     * 请求ID。
     * @example `5EB2D865-B43F-5526-8F92-857718CF73A2`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因，例如：TaskId not found。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `1`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 实例ID。
         * @example `mse_prepaid_public_cn-7pp2eec****`
         */
        InstanceId: string;
        /**
         * 链接地址。
         * @example `mse-af1****-nacos-ans.mse.aliyuncs.com:8848`
         */
        Address: string;
        /**
         * 类型。
         * @example `Nacos`
         */
        Type: string;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * 集群ID。
         * @example `mse_`
         */
        ClusterId: string;
    }[];
}
