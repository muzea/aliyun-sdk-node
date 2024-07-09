export interface GetUserApplicationGroupsResponse {
    /**
     * 接口Request ID。
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * Http状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求成功标识。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口错误信息。
     * @example `null`
     */
    Message: string;
    /**
     * 接口请求Code。
     * @example `200`
     */
    Code: string;
    /**
     * 应用分组列表。
     */
    AppGroups: string[];
}
