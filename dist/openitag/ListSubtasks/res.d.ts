export interface ListSubtasksResponse {
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
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回查询的子任务列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的子任务数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `2`
     */
    TotalPage: number;
    /**
     * 子任务总数。
     * @example `22`
     */
    TotalCount: number;
    /**
     * 子任务列表。
     */
    Subtasks: any[];
    /**
     * 错误码。
     * @example `""`
     */
    ErrorCode: string;
}
