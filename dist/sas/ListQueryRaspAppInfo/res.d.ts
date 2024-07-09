export interface ListQueryRaspAppInfoResponse {
    /**
     * Rasp 应用安装信息。
     */
    Data: {
        /**
         * 资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * Rasp 安装状态。取值：
         * - **SUCCESS**： 安装成功
         * - **FAIL**： 安装失败
         * - **INSTALL**： 安装中
         * @example `SUCCESS`
         */
        RaspStatus: string;
        /**
         * Rasp 应用名称。
         * @example `rasp-app`
         */
        RaspAppName: string;
        /**
         * Rasp 在线状态，取值：
         * - **0**：全量在线
         * - **1**：部分在线
         * - **2**：离线
         * @example `0`
         */
        RaspOnlineStatus: number;
        /**
         * 推送失败结果
         * @example `AGENT_OFFLINE`
         */
        Result: string;
    }[];
    /**
     * 数据请求是否成功。取值：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 附加信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1A975D03-5F49-5354-B2CB-3918D5DA431A`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
