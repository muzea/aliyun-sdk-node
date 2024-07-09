export interface CreateLiveStreamMonitorRequest {
    /**
     * 监播名称。
     * @example `liveMonitor****`
     */
    "MonitorName": string;
    /**
     * 监播输出模版。类型取值：
     * - **lp_ld**：流畅。
     * - **lp_sd**：标清。
     * - **lp_hd**：高清。
     * - **lp_ud**：超清。
     * @example `lp_ud`
     */
    "OutputTemplate": string;
    /**
     * 监播域名。
     * @example `demo.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 监播输出流的App。
     * 名称可自取，不传默认用**monitor**作为AppName名称。
     * @example `monitor****`
     */
    "App"?: string;
    /**
     * 监播输出流名，不传则系统随机生成。
     * @example `monitorStream****`
     */
    "Stream"?: string;
    /**
     * 监控流输入列表。具体内容，请参考下表**InputConfig**。
     * @example `InputConfig`
     */
    "InputList"?: string;
    /**
     * 监播告警阈值设置，JSON格式，具体内容，请参考下表MonitorConfig。
     * @example `"{\"fpsLowThres\": 0.6,\"brLowThres\": 1.1,\"eofDurationThresSec\": 10}"`
     */
    "MonitorConfig"?: string;
    /**
     * 支持输入HTTP(S)格式的回调地址。
     * @example `http://guide.aliyundoc.com/notify`
     */
    "CallbackUrl"?: string;
    /**
     * 监播钉钉告警通过钉群机器人进行告警信息的通知，请先设置钉群机器人，并在此输入机器人的HTTP(S)地址。详情请参见[自定义机器人接入](https://open.dingtalk.com/document/robots/custom-robot-access)。
     * > 配置钉群机器人自定义关键词为“告警”，否则消息无法接收。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=7a7d404056eee1f2fd944ace9bcfc361dc6448583e1d3d3baa****`
     */
    "DingTalkWebHookUrl"?: string;
}
