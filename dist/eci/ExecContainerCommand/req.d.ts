export interface ExecContainerCommandRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID，即容器组ID。
     * @example `eci-2zebxkiifulhl****`
     */
    "ContainerGroupId": string;
    /**
     * 容器名称。
     * @example `nginx`
     */
    "ContainerName": string;
    /**
     * 要在容器内执行的命令序列。最多20个命令，单个命令最长256个字符。
     * 执行多个命令时，字符串需按照JSON格式传入，例如：`["/bin/sh", "-c", "ls -a"]`。
     * @example `["/bin/sh", "-c", "ls -a"]`
     */
    "Command": string;
    /**
     * 是否开启交互。默认为false。
     * 当Command为`/bin/bash`命令时，需要设置为true。
     * @example `false`
     */
    "TTY"?: boolean;
    /**
     * 是否标准输入。默认为true。
     * @example `true`
     */
    "Stdin"?: boolean;
    /**
     * 是否立即执行命令并同步返回结果。默认为false。
     * 如果设置为true，TTY只能设置为false（即Command不是`/bin/bash`命令）。
     * @example `false`
     */
    "Sync"?: boolean;
}
