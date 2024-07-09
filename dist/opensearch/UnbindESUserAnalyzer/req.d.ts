export interface UnbindESUserAnalyzerRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 实例id
     * @example `es-cn-zvp2ff3iq000myzv7`
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
