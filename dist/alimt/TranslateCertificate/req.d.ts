export interface TranslateCertificateRequest {
    /**
     * 原图语言
     * @example `zh`
     */
    "SourceLanguage": string;
    /**
     * 译文语言
     * @example `en`
     */
    "TargetLanguage": string;
    /**
     * oss文件地址：一个可以不用赋权就能访问的HTTP地址
     * @example `http://imageurl`
     */
    "ImageUrl": string;
    /**
     * 翻译的证件类型：身份证(idcard)，驾驶证(driving_license)
     * @example `driving_license`
     */
    "CertificateType": string;
    /**
     * 翻译结果类型：文本（text），图片（image），不传值默认：text
     * @example `text`
     */
    "ResultType"?: string;
}
