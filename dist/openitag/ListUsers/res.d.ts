export interface ListUsersResponse {
    /**
     * 返回编码，默认为0，表示执行正常。
     * @example `0`
     */
    Code: number;
    /**
     * 请求的返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90ABA848-AD74-1F6E-84BC-4182A7F1****`
     */
    RequestId: string;
    /**
     * 详情。
     * @example `null`
     */
    Details: string;
    /**
     * 是否成功，可能值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回查询的标注成员列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的标注成员数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `2`
     */
    TotalPage: number;
    /**
     * 标注成员总数。
     * @example `22`
     */
    TotalCount: number;
    /**
     * 用户列表。
     */
    Users: any[];
    /**
     * 错误码。
     * - 当Success为false，返回业务错误码；
     * - 当Success为true，返回空值。
     * @example `""`
     */
    ErrorCode: string;
}
