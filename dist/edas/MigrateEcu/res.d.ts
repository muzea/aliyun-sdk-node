export interface MigrateEcuResponse {
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
     * 返回数据：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `04B0ABAF-95F2-42B6-A7B1****`
     */
    RequestId: string;
}
