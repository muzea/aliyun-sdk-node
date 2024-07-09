export interface BindESUserAnalyzerRequest {
    /**
     * 应用名称
     * @example `130187460`
     */
    "appGroupIdentity": string;
    /**
     * 实例id
     * @example `es-cn-zvp2g952l000v5uxp`
     */
    "esInstanceId": string;
    /**
     * 请求体
     * @example `{
      "name": "kevintest-analyzer"
    }`
     */
    "body"?: any;
}
