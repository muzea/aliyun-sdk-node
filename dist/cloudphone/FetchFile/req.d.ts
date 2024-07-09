export interface FetchFileRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待执行命令的实例ID。N的范围：1~10
     * @example `cp-acfmxazb4p***`
     */
    "InstanceId": string;
    /**
     * 待发送文件所在的OSS Bucket。
     * > 首次导入apk文件到该OSSBucket前，请添加RAM授权策略，否则会报错NoSetRoletoECSServiceAcount。
     * @example `cloudphone-fvt-cn-hangzhou`
     */
    "OssBucket": string;
    /**
     * 保存到OSS中的名字。
     * @example `test.txt`
     */
    "OssObject": string;
    /**
     * 云手机中文件待保存路径
     * @example `/sdcard/test.txt`
     */
    "Path": string;
}
