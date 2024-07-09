export interface GenerateSysAppDownloadInfoRequest {
    /**
     * 下载AiCC Container应用时，用户选择的插件集合，支持多选，以json数组存储。
     * @example `[{"PkgName":"com.aliyun.aicc.yundevice","VersionCode":20180228},{"PkgName":"com.aliyun.aicc.remoteassistant","VersionCode":""}]`
     */
    "Plugins": string;
    /**
     * 签名方式。取值：
     * - **customized**：自定义签名
     * - **platform**：由平台签名
     * @example `customized`
     */
    "SignMode": string;
    /**
     * 系统类型，1-Android。
     * @example `1`
     */
    "OsType": number;
    /**
     * 用户选择下载的系统应用包名。
     * @example `com.aliyun.aicc`
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
    "CertFileObjectKey"?: string;
}
