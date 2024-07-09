export interface UpdateApmResponse {
    /**
     * 请求ID。
     * @example `18061926-CC50-5F9B-9600-034C29F1D5B0`
     */
    RequestId: string;
    /**
     * 修改是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Result: boolean;
}
