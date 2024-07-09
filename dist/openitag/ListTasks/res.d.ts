export interface ListTasksResponse {
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认可不返回
     * @example `0`
     */
    Code: number;
    /**
     * 请求的返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求id
     * @example `90ABA848-AD74-1F6E-84BC-4182A7F1F29E`
     */
    RequestId: string;
    /**
     * 详情
     * @example `null`
     */
    Details: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 单页大小
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数
     * @example `2`
     */
    TotalPage: number;
    /**
     * 总数
     * @example `22`
     */
    TotalCount: number;
    /**
     * 任务列表
     */
    Tasks: any[];
    /**
     * 错误码
     * @example `""`
     */
    ErrorCode: string;
}
