export interface ModifyInstanceTDERequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 开启TDE功能，取值：**Enabled**。
     * > TDE功能开启后暂不支持关闭，开启前请评估是否影响业务。更多信息，请参见[开启透明数据加密TDE](~~265913~~)。
     * @example `Enabled`
     */
    "TDEStatus": string;
    /**
     * 加密算法，默认AES-CTR-256。
     * > 当**TDEStatus**参数取值为**Enabled**时，本参数才可用。
     * @example `AES-CTR-256`
     */
    "EncryptionName"?: string;
    /**
     * 自定义密钥ID，您可以调用[DescribeEncryptionKeyList](~~302339~~)获取。
     * > * 如果不传入本参数，则由[密钥管理服务](~~28935~~)自动生成密钥。
     * > * 如需创建自定义密钥，您可以调用密钥管理服务的[CreateKey](~~28947~~)接口。
     * @example `ad463061-992d-4195-8a94-ed63********`
     */
    "EncryptionKey"?: string;
    /**
     * 指定待授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息，完成授权后即可使用相关密钥管理服务，格式：`acs:ram::$accountID:role/$roleName` 。
     * > * `$accountID`：云账号ID。您可以登录阿里云控制台，将鼠标悬停在右上角头像的位置，单击**安全设置**进行查看。
     * > * `$roleName`：RAM角色名称，取值固定为：**AliyunRdsInstanceEncryptionDefaultRole**。
     * @example `acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole`
     */
    "RoleArn"?: string;
}
