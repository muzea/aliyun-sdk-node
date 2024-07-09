export interface GetUserApplicationsResponse {
    /**
     * 接口失败返回信息。
     * @example `null`
     */
    Message: string;
    /**
     * 请求的Request ID。
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * Http状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 应用列表。
     */
    AppNameAndIdPairs: {
        /**
         * 应用名称。
         * @example `默认应用`
         */
        AppName: string;
        /**
         * 应用ID。
         * @example `123456789`
         */
        AppId: string;
        /**
         * 应用下机器的机器类型，0表示主机，2表示容器。
         * @example `0`
         */
        ScopeType: number;
        /**
         * 应用类型，0表示主机应用，1表示集群应用。
         * @example `0`
         */
        AppType: number;
    }[];
    /**
     * 接口反馈Code。
     * @example `200`
     */
    Code: string;
    /**
     * 请求成功标识。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
