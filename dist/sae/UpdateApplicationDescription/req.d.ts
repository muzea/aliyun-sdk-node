export interface UpdateApplicationDescriptionRequest {
    /**
     * 需要更新的应用ID。
     * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
     */
    "AppId": string;
    /**
     * 更新的应用描述信息。不超过1024个字符。
     * @example `newdesc`
     */
    "AppDescription": string;
}
