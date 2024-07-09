export interface PushNoticeToiOSRequest {
    /**
     * AppKey信息。
     * @example `24780725`
     */
    "AppKey": number;
    /**
     * 推送目标。可取值：
     * - **DEVICE**：根据设备推送
     * - **ACCOUNT**：根据账号推送
     * - **ALIAS**：根据别名推送
     * - **TAG**：根据标签推送
     * - **ALL**：推送给全部设备
     * @example `ALL`
     */
    "Target": string;
    /**
     * 根据Target来设定，多个值使用逗号分隔，超过限制需要分多次推送。
     * - Target=DEVICE，值如`deviceid111,deviceid1111`（最多支持1000个）。
     * - Target=ACCOUNT，值如`account111,account222`（最多支持1000个）。
     * - Target=ALIAS，值如`alias111,alias222`（最多支持1000个）。
     * - Target=TAG，支持单Tag和多Tag，格式请参见[标签格式](~~434847~~)。
     * - Target=ALL，值为**ALL**。
     * @example `ALL`
     */
    "TargetValue": string;
    /**
     * iOS的通知是通过APNS中心来发送的，需要填写对应的环境信息。
     * - DEV：表示开发环境
     * - PRODUCT：表示生产环境
     * @example `DEV`
     */
    "ApnsEnv": string;
    /**
     * 推送的通知的标题。
     * - iOS 10+通知显示标题。
     * - iOS 8.2 <= iOS系统 < iOS 10：替换通知应用名称。
     * @example `title`
     */
    "Title"?: string;
    /**
     * 推送的通知内容。
     * @example `Hello World`
     */
    "Body": string;
    /**
     * 推送任务自定义标识，当JobKey不为空时，回执日志中会附带该字段。查看回执日志参见[回执日志](~~434651~~)。
     * @example `123`
     */
    "JobKey"?: string;
    /**
     * 自定义的KV结构，开发者扩展用。
     * > 针对iOS设备，该参数要以JSON map的格式传入，否则会解析出错。
     * @example `{"k1":"ios","k2":"v2"}`
     */
    "ExtParameters"?: string;
}
