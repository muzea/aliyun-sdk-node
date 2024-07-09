export interface ModifyAppRequest {
    /**
     * 应用ID。
     * @example `4384****`
     */
    "AppId": string;
    /**
     * 应用名称。
     * 支持Unicode字符，最大64个字符。
     * @example `example`
     */
    "AppName": string;
}
