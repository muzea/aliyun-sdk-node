export interface PullServicesResponse {
    /**
     * 请求ID。
     * @example `EC0A99B9-8BA3-5FE3-8FE7-D7C719CF7BD2`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `You are not authorized to perform this operation. Action: mse:PullServices, Resource: acs:mse:cn-shenzhen:1228932054837788:*`
     */
    Message: string;
    /**
     * 响应码。
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
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 分组。
         * @example `test`
         */
        GroupName: string;
        /**
         * 服务列表。
         */
        Services: {
            /**
             * 服务名。
             * @example `test`
             */
            Name: string;
            /**
             * 命名空间。
             * @example `public`
             */
            Namespace: string;
            /**
             * 分组。
             * @example `test`
             */
            GroupName: string;
            /**
             * 来源ID。
             * @example `1`
             */
            SourceId: string;
            /**
             * 来源类型。
             * @example `MSE`
             */
            SourceType: string;
        }[];
        /**
         * 命名空间别名。
         * @example `public`
         */
        NamespaceShowName: string;
    }[];
}
