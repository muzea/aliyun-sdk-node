export interface RunCommandRequest {
    /**
     * 实例ID列表。一次请求最多支持50个实例。
     */
    "InstanceIds"?: string[];
    /**
     * 命令内容。
     * @example `ls`
     */
    "CommandContent"?: string;
    /**
     * 超时时间。单位秒，如果超过该时间命令仍然没有执行完成，则命令执行状态为超时，如果不填则默认为60秒。
     * @example `60`
     */
    "Timeout"?: number;
}
