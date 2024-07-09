export interface ReplaceSystemDiskRequest {
    /**
     * 指定实例的ID。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId": string;
    /**
     * 重置系统时使用的镜像ID。
     * 未设置`DiskId`参数时，该参数为必选参数。
     * @example `m-bp67acfmxazb4ph****`
     */
    "ImageId"?: string;
    /**
     * 新的系统盘容量，单位为GiB。取值范围：
     * - 普通云盘：Max{20, 参数ImageId对应的镜像大小}~500。
     * - ESSD云盘：
     *   - PL0：Max{1, 参数 ImageId 对应的镜像大小}~2048。
     *   - PL1：Max{20, 参数 ImageId 对应的镜像大小}~2048。
     *   - PL2：Max{461, 参数 ImageId 对应的镜像大小}~2048。
     *   - PL3：Max{1261, 参数 ImageId 对应的镜像大小}~2048。
     * - ESSD AutoPL 云盘：Max{1, 参数 ImageId 对应的镜像大小}~2048。
     * - 其他云盘：Max{20, 参数ImageId对应的镜像大小}~2048。
     * 默认值：Max{40, 参数ImageId对应的镜像大小}
     * > 超过`Max{20, 更换前的系统盘容量}`的云盘容量部分，将收取额外费用。
     * @example `80`
     */
    "SystemDisk.Size"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。
     * > 挂载系统盘时（即设备名为/dev/xvda）有效。
     * @example `true`
     */
    "UseAdditionalService"?: boolean;
    /**
     * 是否重置ECS实例的用户名密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 其中，Windows实例不能以斜线号（/）为密码首字符。
     * 默认值：保持不变。
     * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `EcsV587!`
     */
    "Password"?: string;
    /**
     * 是否使用镜像预设的密码。
     * 默认值：false。
     * > 使用该参数时，Password参数必须为空。同时您需要确保使用的镜像已经设置了密码。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
    /**
     * 密钥对名称。
     * > 该参数仅对Linux系统ECS实例生效。您可以为ECS实例绑定一个SSH密钥对，作为登录凭证。使用了SSH密钥对后，用户名密码的登录凭证方式将被禁用。
     * @example `testKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * > 该参数已废弃，为提高兼容性，建议您使用 `ImageId`。
     * @example `d-bp67acfmxazb4ph****`
     */
    "DiskId"?: string;
    /**
     * > 已弃用。
     * @example `CentOS`
     */
    "Platform"?: string;
    /**
     * > 已弃用。
     * @example `i386`
     */
    "Architecture"?: string;
    /**
     * 更换系统盘后，是否免费使用云安全中心服务。取值范围：
     * - Active：使用。该值仅支持公共镜像。
     * - Deactive：不使用。该值支持所有镜像。
     * 默认值：Deactive。
     * @example `Active`
     */
    "SecurityEnhancementStrategy"?: string;
    /**
     * 是否加密云盘。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 系统盘对应的KMS密钥ID。
     * @example `e522b26d-abf6-4e0d-b5da-04b7******3c`
     */
    "KMSKeyId"?: string;
    /**
     * >该参数暂未开放使用。
     * @example `hide`
     */
    "EncryptAlgorithm"?: string;
    /**
     * 该参数暂未开放使用。
     */
    "Arn"?: {
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        RoleType: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        Rolearn: string;
        /**
         * >该参数暂未开放使用。
         * @example `0`
         */
        AssumeRoleFor: number;
    }[];
}
