export interface ModifyAppVersionRequest {
    /**
     * 应用版本ID。
     * @example `1432****`
     */
    "AppVersionId": string;
    /**
     * 应用版本名称。
     * 支持Unicode字符，最大32个字符。
     * @example `exampleVersion`
     */
    "AppVersionName": string;
}
