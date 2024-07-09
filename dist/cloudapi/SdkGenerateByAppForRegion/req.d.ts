export interface SdkGenerateByAppForRegionRequest {
    /**
     * App编号，系统生成，全局唯一
     * @example `110906109`
     */
    "AppId": number;
    /**
     * 需要生成的编程语言
     * @example `Java`
     */
    "Language": string;
}
