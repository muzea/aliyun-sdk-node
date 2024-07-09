export interface CreateAccessPointRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 权限组名称。
     * 当目标文件系统为通用型NAS，此参数必填。
     * 默认权限组：DEFAULT_VPC_GROUP_NAME（专有网络默认权限组）。
     * @example `DEFAULT_VPC_GROUP_NAME`
     */
    "AccessGroup": string;
    /**
     * 交换机ID。
     * @example `vsw-2zevmwkwyztjuoffg****`
     */
    "VswId": string;
    /**
     * 专有网络ID。
     * @example `vpc-2zesj9afh3y518k9o****`
     */
    "VpcId": string;
    /**
     * 接入点名称。
     * @example `test`
     */
    "AccessPointName"?: string;
    /**
     * 接入点根目录。
     * 默认值为“/”， 如果接入点目录不存在，则还需要填写OwnerUserId和OwnerGroupId参数。
     * @example `/`
     */
    "RootDirectory"?: string;
    /**
     * 是否启用RAM策略。
     * 取值：
     * - true：开启
     * - false（默认值）：不开启
     * > 启用接入点RAM策略以后，缺省禁止所有RAM账号使用接入点挂载和访问数据，您需要为账号进行授权开放对应访问权限，并通过接入点进行挂载访问。禁用后，接入点允许匿名挂载。
     * @example `false`
     */
    "EnabledRam"?: boolean;
    /**
     * 属主用户ID。
     * 当RootDirectory目录不存在时，该参数必填。
     * @example `1`
     */
    "OwnerUserId"?: number;
    /**
     * 属主用户组ID。
     * 当RootDirectory目录不存在时，该参数必填。
     * @example `1`
     */
    "OwnerGroupId"?: number;
    /**
     * POSIX权限。默认值为“0777”。
     * 当填写OwnerUserId和OwnerGroupId参数后，此字段生效。
     * @example `0777`
     */
    "Permission"?: string;
    /**
     * Posix用户ID。
     * @example `123`
     */
    "PosixUserId"?: number;
    /**
     * Posix用户组ID。
     * @example `123`
     */
    "PosixGroupId"?: number;
    /**
     * 第二用户组。多个用户组ID时，使用半角逗号（,)分隔。
     * @example `123,345`
     */
    "PosixSecondaryGroupIds"?: string;
}
