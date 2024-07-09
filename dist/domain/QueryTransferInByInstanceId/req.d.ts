export interface QueryTransferInByInstanceIdRequest {
    /**
     * 实例编号。
     * @example `S20181T0WLI85212`
     */
    "InstanceId": string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
