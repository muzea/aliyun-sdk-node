export interface RealTimeRecordCommandRequest {
    /**
     * 操作行为。取值：
     * - **start**：强制启动录制。
     * - **stop**：强制暂停录制。断流延迟时间到达后，生成录制文件。
     * - **cancel_delay**：重置断流延迟时间，完全停止录制。如果任务已停止，立即生成录制文件。
     * - **restart**：强制重新开始录制。如果restart之前在录制，立即生成文件。
     * > **stop**会强制暂停录制，默认等待180秒后生成录制文件。**cancel_delay**会将断流等待时间从默认180秒改为0，即立刻生成录制文件。
     * @example `start`
     */
    "Command": string;
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
}
