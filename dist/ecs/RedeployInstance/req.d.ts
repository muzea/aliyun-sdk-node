export interface RedeployInstanceRequest {
    /**
     * 处于运行中或者已停止状态的实例ID。
     * @example `i-bp1azkttqpldxgted****`
     */
    "InstanceId": string;
    /**
     * 是否强制停止运行中（Running）的实例。
     * 默认值：false
     * > 强制停止等同于典型的服务器断电关机，实例操作系统中暂未写入存储设备的数据会丢失。建议您尽量对已停止实例做重新部署操作。
     * @example `false`
     */
    "ForceStop"?: boolean;
}
