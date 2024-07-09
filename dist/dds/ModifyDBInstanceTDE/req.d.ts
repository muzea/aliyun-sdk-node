export interface ModifyDBInstanceTDERequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * TDE状态，取值： **enabled**，即开启TDE功能。
     * > TDE功能开启后不支持关闭，请谨慎开启。
     * @example `enabled`
     */
    "TDEStatus": string;
    /**
     * 加密方式，取值：**aes-256-cbc**。
     * > 当**TEDStatus**参数取值为**enabled**时，本参数才可用。
     * @example `aes-256-cbc`
     */
    "EncryptorName"?: string;
    /**
     * 自定义密钥ID。
     * 只有如下地域支持自定义密钥，其余地域会使用默认密钥加密。
     * - 新加坡（ap-southeast-1）
     * - 杭州（cn-hangzhou）
     * - 上海（cn-shanghai）
     * - 北京（cn-beijing）
     * - 深圳（cn-shenzhen）
     * - 香港（cn-hongkong）
     * - 马来西亚（ap-southeast-3）
     * @example `749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
     */
    "EncryptionKey"?: string;
    /**
     * 指定角色的ARN。格式：`acs:ram::$accountID:role/$roleName `。
     * > - `$accountID`：云账号ID。您可以通过登录阿里云控制台，将鼠标悬停在右上角头像的位置，单击安全设置进行查看。
     * > - `$roleName`：RAM角色名称。您可以通过登录RAM控制台，单击左侧导航栏的RAM角色管理，在RAM角色名称列表下进行查看。
     * @example `acs:ram::123456789012****:role/adminrole	`
     */
    "RoleARN"?: string;
}
