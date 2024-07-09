export interface GetClassRecordRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `lq****cu`
     */
    "AppId": string;
    /**
     * 课程唯一标识，由调用CreateClass返回。
     * @example `AE35****T95F`
     */
    "ClassId": string;
    /**
     * 操作人用户ID，仅支持英文字母和数字，长度最多36个字符。
     * @example `34**29`
     */
    "UserId"?: string;
}
