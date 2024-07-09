export interface QuerySessionByClientIdResponse {
    /**
     * 设备是否在线，取值说明如下：
     * - **true**：在线
     * - **false**：不在线
     * @example `true`
     */
    OnlineStatus: boolean;
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `E4581CCF-62AF-44D9-B5B4-D1DBBC0E****`
     */
    RequestId: string;
}
