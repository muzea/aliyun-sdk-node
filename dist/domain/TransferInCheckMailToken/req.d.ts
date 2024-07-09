export interface TransferInCheckMailTokenRequest {
    /**
     * 邮箱中收到的Token。
     * @example `3bdbaa0e-faa2-4ad2-98f4-bcfeb0237054`
     */
    "Token": string;
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
