export interface ModifyImageSharePermissionRequest {
    /**
     * 自定义镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 被共享的自定义镜像ID。
     * @example `m-bp18ygjuqnwhechc****`
     */
    "ImageId": string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `hide`
     */
    "LaunchPermission"?: string;
    /**
     * 授权共享镜像的阿里云账号ID。N的取值范围：1~10，若一次提交超过10个阿里云账号，系统将只处理前10个，忽略多余的账号。
     * @example `1234567890`
     */
    "AddAccount"?: string[];
    /**
     * 删除镜像共享的阿里云账号ID。N的取值范围：1~10，若一次提交超过10个阿里云账号，系统将只处理前10个，忽略多余的账号。
     * @example `1234567890`
     */
    "RemoveAccount"?: string[];
    /**
     * 是否发布或下架社区镜像。取值范围：
     * - true：发布该镜像为社区镜像。
     * - false：下架该镜像为普通镜像，若该镜像本身是普通镜像，则不做改变。
     * 默认值：false。
     * @example `false`
     */
    "IsPublic"?: boolean;
}
