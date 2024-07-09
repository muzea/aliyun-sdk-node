export interface GetTaskResponse {
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认可不返回。
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
     * @example `0F01E603-8A9F-18ED-AD43-D52B5030****`
     */
    RequestId: string;
    /**
     * 详情。
     * @example `null`
     */
    Details: string;
    /**
     * 是否成功。取值如下：
     * - true：表示请求成功。
     * - false：表示请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务。
     */
    Task: any;
    /**
     * 错误码。
     * @example `""`
     */
    ErrorCode: string;
}
