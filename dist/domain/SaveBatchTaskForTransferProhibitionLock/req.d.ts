export interface SaveBatchTaskForTransferProhibitionLockRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 开启关闭状态。取值：
     * - **true**：开启；
     * - **false**：关闭。
     *
     * @example `false`
     */
    "Status": boolean;
    /**
     * 域名列表。
     * @example `test1.com`
     */
    "DomainName": string[];
}
