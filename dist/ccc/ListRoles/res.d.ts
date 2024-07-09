export interface ListRolesResponse {
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
     * @example `711D948F-C616-4E23-8573-0F260513CE09`
     */
    RequestId: string;
    /**
     * 角色列表。
     */
    Data: {
        /**
         * 角色名称。
         * @example `Admin`
         */
        Name: string;
        /**
         * 角色ID，格式为：角色@实例ID。
         * @example `Admin@ccc-test`
         */
        RoleId: string;
    }[];
}
