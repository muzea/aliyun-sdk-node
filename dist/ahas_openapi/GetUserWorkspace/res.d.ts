export interface GetUserWorkspaceResponse {
    /**
     * 错误信息
     * @example `null`
     */
    Message: string;
    /**
     * RequestID
     * @example `0f7dd92f-4490-xxxx-b8bd-xxxxxxxxxxxxx`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 演练空间信息列表
     */
    WorkspaceList: {
        /**
         * 演练空间类型：
         * - 0：默认空间
         * - 1：用户空间
         * @example `0`
         */
        Type: number;
        /**
         * 演练空间ID
         * @example `1234567890123456789`
         */
        WorkspaceId: string;
        /**
         * 演练空间描述
         * @example `演练空间描述`
         */
        Description: string;
        /**
         * 演练空间名称
         * @example `演练空间名称`
         */
        Name: string;
    }[];
    /**
     * 接口错误编码
     * @example `P_ERROR_XXXXXXX`
     */
    Code: string;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
}
