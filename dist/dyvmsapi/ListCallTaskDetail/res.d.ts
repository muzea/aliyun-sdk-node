export interface ListCallTaskDetailResponse {
    /**
     * 请求ID。
     * @example `D692AC3D-CBA8-417F-BEB9-5B73718922D4`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 每页显示的任务个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 被叫号码总数。
     * @example `10`
     */
    Total: number;
    /**
     * 任务详情。
     */
    Data: {
        /**
         * 任务状态。取值：
         * - **SUCCESS**：外呼成功。
         * - **FAIL**：外呼失败。
         * - **INIT**：未外呼。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 通话时长。单位：秒。
         * @example `10`
         */
        Duration: number;
        /**
         * 被叫号码。
         * @example `1390000****`
         */
        CalledNum: string;
        /**
         * 主叫号码。
         * @example `0571000****`
         */
        Caller: string;
        /**
         * 操作ID。此参数暂时不可用。
         * @example `43085***`
         */
        Id: number;
    }[];
}
