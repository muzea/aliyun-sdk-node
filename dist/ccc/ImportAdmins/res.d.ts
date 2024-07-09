export interface ImportAdminsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `1CDB5C94-ACFB-59B5-85FE-C1DAF8049C63`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
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
         * 坐席ID。
         * @example `agent@ccc-test`
         */
        UserId: string;
        /**
         * 角色ID。
         * @example `Admin@ccc-test`
         */
        RoleId: string;
        /**
         * 坐席分机号。
         * @example `8021****`
         */
        Extension: string;
        /**
         * 阿里云RAM账户的UID。
         * @example `26972543893791****`
         */
        RamId: string;
    }[];
}
