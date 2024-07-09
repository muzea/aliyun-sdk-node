export interface ReInitDiskRequest {
    /**
     * 指定的磁盘ID。
     * @example `d-bp67acfmxazb4ph****`
     */
    "DiskId": string;
    /**
     * 重新初始化系统盘时，是否重置ECS实例的用户名密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 其中，Windows实例不能以斜线号（/）为密码首字符。
     * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `EcsV587!`
     */
    "Password"?: string;
    /**
     * 密钥对名称。
     * > 该参数仅适用于Linux实例。重新初始化系统盘时，您可以为ECS实例绑定一个SSH密钥对，作为登录凭证。使用了SSH密钥对后，用户名密码的登录凭证方式将被禁用。
     * @example `testKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 重新初始化磁盘后，是否自动启动实例。
     * 默认值：false。
     * @example `true`
     */
    "AutoStartInstance"?: boolean;
    /**
     * 当指定的云盘为系统盘时，重新初始化云盘后是否免费使用云安全中心服务。取值范围：
     *
     * - Active：使用。该值仅支持公共镜像。
     * - Deactive：不使用。该值支持所有镜像。
     * 默认值：Deactive。
     * @example `Active`
     */
    "SecurityEnhancementStrategy"?: string;
}
