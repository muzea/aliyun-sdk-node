export interface UpdateGatewayRouteTimeoutRequest {
    /**
     * 关联记录ID。
     * @example `567`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `85`
     */
    "GatewayId"?: number;
    /**
     * 超时时间。
     */
    "TimeoutJSON"?: {
        /**
         * 超时时间数值
         * @example `1`
         */
        UnitNum: number;
        /**
         * 时间单元，如下：s：秒
         * @example `s`
         */
        TimeUnit: string;
        /**
         * 开启状态
         * @example `off`
         */
        Status: string;
    };
    /**
     * 网关唯一标识ID。
     * @example `gw-533290d279c1405f9628c64f7c8272ee`
     */
    "GatewayUniqueId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
