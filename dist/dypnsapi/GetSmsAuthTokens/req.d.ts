export interface GetSmsAuthTokensRequest {
    /**
     * 包名。OsType为**Android**时必传。
     * @example `com.aliqin.mytel.test`
     */
    "PackageName"?: string;
    /**
     * 签名。OsType为**Android**时必传。
     * @example `47fcc6615485e83b4100433****`
     */
    "SignName"?: string;
    /**
     * 方案号。
     * @example `FC100000134840112`
     */
    "SceneCode": string;
    /**
     * 系统类型。取值：**Android**或**iOS**。
     * @example `Android`
     */
    "OsType": string;
    /**
     * iOS应用ID。OsType为**iOS**时必传。
     * @example `12345****`
     */
    "BundleId"?: string;
    /**
     * Token有效期（单位：秒），最小900，最大43200。
     * @example `900`
     */
    "Expire": number;
    /**
     * 短信模板Code。
     * @example `SMS_13987****`
     */
    "SmsTemplateCode": string;
    /**
     * 短信验证码有效期（单位：秒），默认180。
     * @example `60`
     */
    "SmsCodeExpire"?: number;
}
