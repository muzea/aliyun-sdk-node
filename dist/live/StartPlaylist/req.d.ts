export interface StartPlaylistRequest {
    /**
     * 节目单ID。如果您通过[AddPlaylistItems接口](~~203414~~)添加节目单项，请查看AddPlaylistItems接口调用返回的参数ProgramId值。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "ProgramId": string;
    /**
     * 重启模式。取值：
     * - **Restart**：从头开始。
     * - **Continue**：根据停止前播放位置继续。如果**ResumeMode**参数设置为**Custom**时，请求参数**StartItemId**才必填。
     * - **Custom**：自定义。
     * @example `Custom`
     */
    "ResumeMode"?: string;
    /**
     * 起始节目单项ID。启动轮播时将先播放此节目单项。
     * ><notice> 如果**ResumeMode**参数设置为**Custom**时，此参数才必传。
     * ></notice>
     * @example `asdfasdfasdf****`
     */
    "StartItemId"?: string;
    /**
     * 启动偏移。视频文件起始偏移值。仅对文件视频有效， 单位：毫秒。
     * 大于0，表示从相对于首帧的偏差时间作为开始读取的位置。
     * @example `10000`
     */
    "Offset"?: number;
}
