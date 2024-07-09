export interface AppFailOverResponse {
    /**
     * 请求ID
     * @example `9656C816-1E9A-58D2-86D5-710678D61AF1`
     */
    RequestId: string;
    /**
     * 报错信息
     * @example `该应用存在主备切换组状态不对，切换前必须所有组处于待切换状态！`
     */
    Message: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 容灾切换任务ID（TaskId）
     * @example `7441`
     */
    Data: number;
}
