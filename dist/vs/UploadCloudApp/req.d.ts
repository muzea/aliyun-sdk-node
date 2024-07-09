export interface UploadCloudAppRequest {
    /**
     * 应用名。安卓应用需使用其包名，如com.aaa.bbb。
     * 默认取值规范：
     * 1. 长度8-255
     * 2. 小写字母、数字、下划线'_'、中划线'-'、点分段'.'
     * 3. 首、尾字符必须为字母或数字
     * @example `com.aaa.bbb`
     */
    "AppName": string;
    /**
     * 应用版本。安卓应用需使用其VersionName，如1.1.1。
     * 默认取值规范：
     * 1. 长度1-255
     * 2. 小写字母、数字、下划线'_'、中划线'-'、点分段'.'
     * 3. 首、尾字符必须为字母或数字
     * @example `1.1.1`
     */
    "AppVersion": string;
    /**
     * 应用包下载地址
     * @example `https://xxx.xxx.xxx.apk`
     */
    "DownloadUrl": string;
    /**
     * 应用包md5，用于检查应用包完整性
     * @example `0CFBB7BD10CDD7279642ADAB8FEF3DEE`
     */
    "Md5": string;
    /**
     * 应用描述信息
     * @example `测试应用包`
     */
    "Description"?: string;
}
