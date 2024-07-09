export interface QuerySlbSpecResponse {
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。当请求成功时，返回成功信息；当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
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
     * 返回数据。
     */
    Data: {
        /**
         * 返回数据ID。
         * @example `2`
         */
        Id: number;
        /**
         * 规格。
         * @example `slb.s2.small`
         */
        Spec: string;
        /**
         * 名称。
         * @example `标准型I`
         */
        Name: string;
        /**
         * 最大连接数。
         * @example `50,000`
         */
        MaxConnection: string;
        /**
         * 每秒连接数。
         * @example `50,000`
         */
        NewConnectionPerSecond: string;
        /**
         * 每秒查询率。
         * @example `50,000`
         */
        Qps: string;
    }[];
}
