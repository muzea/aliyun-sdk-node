export interface CompanyThreeElementsVerificationRequest {
    /**
     * 企业证件号。
     * @example `9242032*******J627`
     */
    "EpCertNo": string;
    /**
     * 企业名称。
     * @example `某企业`
     */
    "EpCertName": string;
    /**
     * 企业法人姓名。
     * >如果企业有多个法人，法人之间需用中文顿号（”、”）隔开。
     * @example `张三`
     */
    "LegalPersonCertName": string;
    /**
     * 授权码。
     * >登录[号码百科控制台](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC)，在[我的申请](https://dytns.console.aliyun.com/analysis/apply)页面，获取授权ID即授权码。
     * @example `Dd1r***4id`
     */
    "AuthCode": string;
}
