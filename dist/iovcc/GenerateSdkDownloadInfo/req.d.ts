export interface GenerateSdkDownloadInfoRequest {
    /**
     * 用户选择要下载的sdk集合，多个以英文逗号隔开。
     * @example `AiCCSDK-FOTA,AiCCSDK-CMNS`
     */
    "Sdks": string;
    /**
     * 自定义应用ID。
     * @example `A3BU0HBO`
     */
    "AppId": string;
    /**
     * 系统类型，1-Android。
     * @example `1`
     */
    "OsType": number;
    /**
     * 自定义应用的包名。
     * @example `com.test.app`
     */
    "PkgName": string;
    /**
     * 项目ID。
     * @example `11`
     */
    "ProjectId": string;
    /**
     * RSA证书文件上传OSS后，在OSS上的完整文件名。
     * @example `1768723179523459/11/2018-05-07/1525699039841.rsa`
     */
    "CertFileObjectKey": string;
}
