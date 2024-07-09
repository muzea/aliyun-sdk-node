export interface CreateAppRequest {
    /**
     * 应用名称。
     * @example `应用名称1`
     */
    "AppName": string;
    /**
     * 应用文件在Oss中的存储名称
     * 该参数与FilePath共同使用，唯一确定oss地址。
     * @example `testApp.apk`
     */
    "FileName"?: string;
    /**
     * 应用文件存储在oss的bucket地址
     * 该参数与FileName共同使用，唯一确定oss地址。
     * @example `tenant/1642150****​/`
     */
    "FilePath"?: string;
    /**
     * 应用图标地址。
     * @example `https://test.png`
     */
    "IconUrl"?: string;
    /**
     * 应用oss地址
     * 该参数与“FileName、FilePath”必须选填一类。
     * @example `http://testApp.apk`
     */
    "OssAppUrl"?: string;
    "BizRegionId"?: string;
    /**
     * 安装参数。安装应用时默认自带-r安装参数。
     * @example `-d`
     */
    "InstallParam"?: string;
    /**
     * 应用描述。
     * @example `应用描述`
     */
    "Description"?: string;
}
