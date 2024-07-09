export interface UpdateDBInstanceTDERequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 开启，固定取值1。
     * @example `1`
     */
    "TDEStatus": number;
    /**
     * 自定义密钥ID时传入。也可以不传入使用后端自动生成。
     * @example `RkVBNURDMjAtNkQ4QS01OTc5LTk3QUEtRkM1NzU0Nk******`
     */
    "EncryptionKey"?: string;
    /**
     * 角色的全局资源描述符，用来指定具体角色。详情请参见RAM角色概览。
     * @example `acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    "RoleArn"?: string;
}
