export interface InstallApplicationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待执行命令的实例ID。N的范围：1~10。
     */
    "InstanceId"?: string[];
    /**
     * 应用文件所在的OSS Bucket。
     * > 首次导入应用文件到该OSSBucket前，请添加RAM授权策略，否则会报错NoSetRoletoECSServiceAcount。
     * @example `phoneapplication`
     */
    "OssBucket": string;
    /**
     * 应用文件所在的OSS Object的文件名称（key）。
     * @example `test.apk`
     */
    "OssObject": string;
}
