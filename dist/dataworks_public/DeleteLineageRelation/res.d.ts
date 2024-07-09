export interface DeleteLineageRelationResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息
     * @example `qualifiedName should be in format as entity-table.entity-guid`
     */
    ErrorMessage: string;
    /**
     * 请求的ID：用于定位日志、排查问题
     * @example `64B-587A-8CED-969E1973887FXXX-TT`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * true：调用成功
     * false：调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `1010040007`
     */
    ErrorCode: string;
    /**
     * 操作结果：
     * true: 成功
     * false: 失败
     * @example `true`
     */
    Status: boolean;
}
