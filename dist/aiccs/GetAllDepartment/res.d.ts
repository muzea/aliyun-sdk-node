export interface GetAllDepartmentResponse {
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `98B032F5-6473-4EAC-8BA8-C28993513A1F`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 部门信息。
     */
    Data: {
        /**
         * 部门ID。
         * @example `10`
         */
        DepartmentId: number;
        /**
         * 部门名称。
         * @example `部门A`
         */
        DepartmentName: string;
    }[];
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
