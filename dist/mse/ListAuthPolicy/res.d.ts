export interface ListAuthPolicyResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `05A5A150-4A5F-5A8C-97D6-710776CC8408`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 返回数据。
         */
        Result: {
            /**
             * 状态。
             * @example `1`
             */
            Status: number;
            /**
             * 服务鉴权规则内容列表。
             */
            AuthRule: {
                /**
                 * 是否黑名单。
                 * @example `false`
                 */
                Black: boolean;
                /**
                 * 路径。
                 * @example `/a`
                 */
                Path: string;
                /**
                 * 请求方法。
                 */
                Method: {
                    /**
                     * 方法版本号。
                     * @example `0.0.1`
                     */
                    Version: string;
                    /**
                     * 请求参数类型列表。
                     */
                    ParameterTypes: string[];
                    /**
                     * 服务名称。
                     * @example `spring-cloud-a`
                     */
                    ServiceName: string;
                    /**
                     * 方法名。
                     * @example `hello`
                     */
                    Name: string;
                    /**
                     * 分组。
                     * @example `default`
                     */
                    Group: string;
                    /**
                     * 返回值类型。
                     * @example `Boolean`
                     */
                    ReturnType: string;
                };
                /**
                 * 应用集合。
                 */
                AppIds: string[];
                /**
                 * 规则类型。
                 * - 0， 按照应用维度。
                 * - 1，按照命名空间维度。
                 * @example `0`
                 */
                AuthType: number;
                /**
                 * 命名空间列表。
                 */
                K8sNamespaces: string[];
            }[];
            /**
             * 命名空间ID。
             * @example `ced54a95-4e33-4bda-be7e-37e95868***`
             */
            NamespaceId: string;
            /**
             * 协议类型。取值：
             * - **SPRING_CLOUD**。
             * - **DUBBO**。
             * - **istio**。
             * @example `SPRING_CLOUD`
             */
            Protocol: string;
            /**
             * 资源拥有者的阿里云账号ID。
             * @example `19039813784***`
             */
            AccountId: string;
            /**
             * 应用来源。
             * @example `edasmsc`
             */
            Source: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 应用名称。
             * @example `spring-cloud-a`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `hkhon1po62@5f1b08becb*****`
             */
            AppId: string;
            /**
             * 鉴权规则名称。
             * @example `test`
             */
            Name: string;
            /**
             * ID。
             * @example `204`
             */
            Id: number;
            /**
             * 开启或关闭。
             * - `true`：开启。
             * - `false`：关闭。
             * @example `false`
             */
            Enable: boolean;
            /**
             * 规则类型。
             * - 0， 按照应用维度。
             * - 1，按照命名空间维度。
             * @example `0`
             */
            AuthType: number;
            /**
             * 命名空间。
             * @example `c19c6c500e1ff4d7abc7bed9b8236***`
             */
            K8sNamespace: string;
        }[];
        /**
         * 总条数。
         * @example `11`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页大小。
         * @example `10`
         */
        PageSize: number;
    };
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
}
