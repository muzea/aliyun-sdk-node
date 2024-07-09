export interface MoveResourceGroupResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 接口请求结果，取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 资源ID。
         * @example `nlb-nrnrxwd15en27r****`
         */
        ResourceId: string;
    };
}
