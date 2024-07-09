export interface ListApiGatewayAppsResponse {
    /**
     * 关联的网关app信息。
     */
    ApiGatewayApps: {
        /**
         * API网关应用AppKey。
         * @example `24659924`
         */
        GatewayAppKey: string;
        /**
         * 状态。0表示正常，1表示禁用。
         * @example `0`
         */
        Status: number;
        /**
         * API网关应用AppSecret，接口不会返回完整的AppSecret，只显示头尾几个字符。
         * @example `a******1`
         */
        GatewayAppSecret: string;
        /**
         * API网关应用ID。
         * @example `1111111`
         */
        GatewayAppId: string;
        /**
         * 所属用户ID。
         * @example `1768723179523459`
         */
        UserId: string;
        /**
         * 项目ID。
         * @example `11`
         */
        ProjectId: string;
        /**
         * 创建时间。
         * @example `1508400744000`
         */
        GmtCreate: number;
        /**
         * 修改时间。
         * @example `1525340035000`
         */
        GmtModified: number;
        /**
         * 主键ID。
         * @example `8`
         */
        Id: number;
    }[];
    /**
     * 请求ID。
     * @example `9CC2A1F1-DAE4-47DA-A682-240AF2DEED84`
     */
    RequestId: string;
}
