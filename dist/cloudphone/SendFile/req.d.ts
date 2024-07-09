export interface SendFileRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待执行命令的实例ID。N的范围：1~10。
     */
    "InstanceId"?: string[];
    /**
     * 待发送文件所在的OSS Bucket。
     * > 首次导入apk文件到该OSSBucket前，请添加RAM授权策略，否则会报错NoSetRoletoECSServiceAcount。
     * @example `cloudphone-fvt-cn-hangzhou`
     */
    "OssBucket": string;
    /**
     * 文件所在的OSS Object的文件名称（key）。
     * @example `test.txt`
     */
    "OssObject": string;
    /**
     * 拉取文件所在云手机中的完整路径
     * @example `/sdcard`
     */
    "Path": string;
}
