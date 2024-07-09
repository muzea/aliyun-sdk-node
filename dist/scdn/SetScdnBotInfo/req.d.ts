export interface SetScdnBotInfoRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * bot防护开关。取值：
     * - **on**：打开。
     * - **off**：关闭。
     * @example `on`
     */
    "Enable": string;
    /**
     * bot防护参数。取值：
     * - **limit**：拦截模式。
     * - **observer**：观察模式。
     * @example `limit`
     */
    "Status": string;
}
