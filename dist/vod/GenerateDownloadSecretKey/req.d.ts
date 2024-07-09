export interface GenerateDownloadSecretKeyRequest {
    /**
     * APP唯一标识
     * - Android：keystore文件的SHA-1值，获取到的SHA-1应为带冒号的字符串。
     * - iOS：App Bundle ID值。
     * - Windows：数字签名证书的序列号。
     * APP唯一标识的获取方式，请参见[获取APP唯一标识](~~86107#section-wtj-9d7-lg2~~)。
     * @example `BB:0D:AC:74:D3:21:09:EF:9C:71:1A:5E:77:2C:8E:BF:03:FD:FA:5A
    `
     */
    "AppIdentification": string;
    /**
     * 自定义加密私钥字符串，长度为16~32个字符，由英文字符和数字自由组合，且必须同时包含大写字母、小写字母和数字。
     * @example `AppDecryptKeyAndroid20230101`
     */
    "AppDecryptKey": string;
}
