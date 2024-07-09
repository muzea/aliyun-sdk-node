export interface CreateAppVersionRequest {
    /**
     * 应用版本归属的应用ID。
     * @example `4384****`
     */
    "AppId": string;
    /**
     * 应用版本名称。
     * 支持Unicode字符，最大32个字符。
     * @example `exampleVersion`
     */
    "AppVersionName": string;
}
