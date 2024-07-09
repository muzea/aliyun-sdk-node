export interface SwitchGlobalBroadcastTypeResponse {
    /**
     * 广播表从多写切换成异步链路模式是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `DSSDF-SEWE-*****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
