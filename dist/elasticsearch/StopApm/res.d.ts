export interface StopApmResponse {
    /**
     * 请求ID。
     * @example `FEC32FE6-4697-5110-9668-C6016EAEB5DE`
     */
    RequestId: string;
    /**
     * 停止是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Result: boolean;
}
