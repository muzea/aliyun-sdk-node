export interface InsertClusterMemberResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求接口返回的数据。
     * @example `Transform submit success!`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `01B49A88-B06F-423B-A5EF-E5C0A89******`
     */
    RequestId: string;
}
