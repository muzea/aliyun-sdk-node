export interface AppFailOverRequest {
    /**
     * 应用ID
     * @example `BE68D71ZY5YYIU9R`
     */
    "ApplicationId"?: string;
    /**
     * 容灾切换目标可用区
     * @example `cn-hangzhou-g`
     */
    "FailZone"?: string;
}
