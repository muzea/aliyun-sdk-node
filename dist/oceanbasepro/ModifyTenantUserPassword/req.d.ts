export interface ModifyTenantUserPasswordRequest {
    /**
     * 数据库账号名称。
     * 不能使用某些预留关键字，如 SYS、root 等。
     * @example `pay_test`
     */
    "UserName": string;
    /**
     * 租户 ID。
     * @example `t4pnum****`
     */
    "TenantId": string;
    /**
     * 数据库账号访问密码。
     * 必须包含大写英文字符、小写英文字符、数字、特殊字符占三种，长度为 10-32 位； 特殊字符为：!@#$%^&* ()_ +-=
     * @example `!Aliyun4Oceanbase`
     */
    "UserPassword": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 加密方式。
     * @example `RSA`
     */
    "EncryptionType"?: string;
}
