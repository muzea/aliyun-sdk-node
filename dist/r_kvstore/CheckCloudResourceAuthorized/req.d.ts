export interface CheckCloudResourceAuthorizedRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 指定待授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息，完成该角色的授权后即可使用相关密钥管理服务，格式：`acs:ram::$accountID:role/$roleName` 。
     * > * `$accountID`：云账号ID。您可以登录阿里云控制台，将鼠标悬停在右上角头像的位置，单击**安全设置**进行查看。
     * > * `$roleName`：RAM角色名称，取值固定为：**AliyunRdsInstanceEncryptionDefaultRole**。
     * @example `acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole`
     */
    "RoleArn"?: string;
}
