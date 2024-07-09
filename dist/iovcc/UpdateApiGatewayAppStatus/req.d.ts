export interface UpdateApiGatewayAppStatusRequest {
    /**
     * 项目ID。
     * @example `PPCVFRG7`
     */
    "ProjectId": string;
    /**
     * 网关应用AppId。
     * @example `5929076`
     */
    "GatewayAppId": string;
    /**
     * 状态，0-正常，1-禁用。
     * @example `1`
     */
    "Status": number;
}
