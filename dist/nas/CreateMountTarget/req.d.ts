export interface CreateMountTargetRequest {
    /**
     * 文件系统ID。
     * - 通用型NAS：31a8e4\*\*\*\*。
     * - 极速型NAS：必须以`extreme-`开头，例如extreme-0015\*\*\*\*。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * > 仅中国站支持CPFS文件系统。
     * @example `174494****`
     */
    "FileSystemId": string;
    /**
     * 权限组名称。
     * 当目标文件系统为通用型NAS或极速型NAS时，此参数必填。
     * 默认权限组：DEFAULT_VPC_GROUP_NAME（专有网络默认权限组）。
     * @example `vpc-test`
     */
    "AccessGroupName"?: string;
    /**
     * 挂载点网络类型。取值为**Vpc**，表示专有网络。
     * @example `Vpc`
     */
    "NetworkType": string;
    /**
     * 专有网络ID。
     * 当网络类型是专有网络，此字段必填且有意义。
     * 例如：
     * NetworkType=VPC时，VpcId为必填项。
     * @example `vpc-2zesj9afh3y518k9o****`
     */
    "VpcId"?: string;
    /**
     * 交换机ID。
     * 当网络类型是专有网络，此字段必填且有意义。
     * 例如：
     * NetworkType=VPC时，VSwitchId为必填项。
     * @example `vsw-2zevmwkwyztjuoffg****`
     */
    "VSwitchId"?: string;
    /**
     * 安全组ID。
     * @example `sg-bp1fg655nh68xyz9****`
     */
    "SecurityGroupId"?: string;
    /**
     * 是否创建IPv6挂载点。
     * 取值：
     * - true：创建
     * - false（默认值）：不创建
     * > 当前仅极速型NAS中国内地各地域支持IPv6功能，且该文件系统需要开启IPv6功能。
     * @example `true`
     */
    "EnableIpv6"?: boolean;
    /**
     * 校验是否有存量挂载点。仅支持校验CPFS文件系统。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建挂载点，也不会产生费用。
     * - true：发送校验请求，不会创建挂载点。检查项包括是否填写了必需参数、请求格式、业务限制和CPFS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回`200 HttpCode`，但`MountTargetDomain`为空。
     * - false（默认值）：发送正常请求，通过检查后直接创建挂载点。
     * @example `false`
     */
    "DryRun"?: boolean;
}
