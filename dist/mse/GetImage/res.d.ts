export interface GetImageResponse {
    /**
     * 请求ID。
     * @example `25EA0A83-9007-4E87-808C-637BE1A****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 当前集群镜像版本的4位全名
         * @example `3.5.5.0`
         */
        CurrentVersionFullShowName: string;
        /**
         * 可升级的增量版本Code
         * @example `ZooKeeper_3_6_3`
         */
        MaxVersionCode: string;
        /**
         * 可升级的增量版本全名
         * @example `3.6.3.0`
         */
        MaxVersionFullShowName: string;
        /**
         * 可升级的最大版本变更日志url
         * @example `https://xxxxx`
         */
        MaxVersionChangelogUrl: string;
    };
}
