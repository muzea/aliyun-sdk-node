export interface AttachDiskRequest {
    /**
     * 目标ECS实例的ID。
     * @example `i-bp1dq5lozx5f4pmd****`
     */
    "InstanceId": string;
    /**
     * 待挂载的磁盘ID。磁盘（`DiskId`）和实例（`InstanceId`）必须在同一个可用区。
     * @example `d-bp1j4l5axzdy6ftk****`
     */
    "DiskId": string;
    /**
     * 磁盘设备名称。
     * > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
     * @example `testDeviceName`
     */
    "Device"?: string;
    /**
     * 释放实例时，该磁盘是否随实例一起释放。
     * - true：释放。
     * - false：不释放。磁盘会转换成按量付费数据盘而被保留下来。
     * 默认值：false。
     * 设置该参数时，您需要注意：
     * - 将`DeleteWithInstance`置为`false`后，一旦ECS实例被安全控制，即`OperationLocks`中标记了`"LockReason" : "security"`，释放ECS实例时会忽略磁盘的该属性，被同时释放。
     * - 若您需要挂载的目标磁盘为`弹性临时盘`，则必须将`DeleteWithInstance`参数设置为`true`。
     * - 开启多重挂载特性的云盘，不支持设置该参数。
     * @example `false`
     */
    "DeleteWithInstance"?: boolean;
    /**
     * 是否作为系统盘挂载。
     * 默认值：false。
     * > 设置为`Bootable=true`时，目标ECS实例必须处于无系统盘状态。
     * @example `false`
     */
    "Bootable"?: boolean;
    /**
     * 挂载系统盘时，设置实例的用户名密码，仅对administrator和root用户名生效，其他用户名不生效。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 其中，Windows实例不能以斜线号（/）为密码首字符。
     * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `EcsV587!`
     */
    "Password"?: string;
    /**
     * 挂载系统盘时，为Linux系统ECS实例绑定的SSH密钥对的名称。
     * - Windows Server系统：不支持SSH密钥对。即使填写了该参数，只执行`Password`的配置。
     * - Linux系统：密码登录方式会被初始化成禁止。
     * @example `KeyPairTestName`
     */
    "KeyPairName"?: string;
    /**
     * 是否强制执行磁盘挂载操作。
     * - true：强制。
     * - false：不强制。
     * 默认值为false。
     * @example `false`
     */
    "Force"?: boolean;
}
