export interface GetLiveRecordRequest {
    /**
     * 应用唯一标识，由6位小写字母、数字组成，由控制台创建后获取。
     * @example `lq****cu`
     */
    "AppId": string;
    /**
     * 直播唯一标识，由调用CreateLiveRoom返回。
     * @example `AE35****T95F`
     */
    "LiveId": string;
    /**
     * 操作人用户ID。
     * @example `34**29`
     */
    "UserId"?: string;
}
