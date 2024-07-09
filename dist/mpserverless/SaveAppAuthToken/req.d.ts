export interface SaveAppAuthTokenRequest {
    /**
     * 服务空间ID。
     * @example `368ef42a-763f-0000-acc2-8aa9564c****`
     */
    "SpaceId": string;
    /**
     * isv的appId。
     * @example `2021002110693xxx`
     */
    "IsvAppId": string;
    /**
     * 小程序appId。
     * @example `2021002198669xxx`
     */
    "AppId": string;
    /**
     * 小程序授权Token。
     * @example `202111BB576ef688a3564875a75a9babd6XXXXXX`
     */
    "AppAuthToken": string;
}
