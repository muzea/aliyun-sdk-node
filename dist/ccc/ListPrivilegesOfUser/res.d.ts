export interface ListPrivilegesOfUserResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 权限范围。
         * @example `SELF_ONLY`
         */
        Scope: string;
        /**
         * 权限名称，普通客户无需了解具体的权限名称，该接口主要由坐席工作台调用。
         * @example `Workbench:Call`
         */
        Name: string;
    }[];
}
