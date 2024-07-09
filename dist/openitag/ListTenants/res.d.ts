export interface ListTenantsResponse {
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
     * @example `-`
     */
    Details: string;
    /**
     * 请求是否成功，可能值：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回查询的租户列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的租户数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 租户列表总页数。
     * @example `2`
     */
    TotalPage: number;
    /**
     * 租户总数。
     * @example `22`
     */
    TotalCount: number;
    /**
     * 租户列表。
     */
    Tenants: any[];
    /**
     * 返回的错误码。
     * @example `""`
     */
    ErrorCode: string;
}
