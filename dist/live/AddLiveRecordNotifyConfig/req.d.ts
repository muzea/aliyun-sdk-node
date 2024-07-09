export interface AddLiveRecordNotifyConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 录制回调（包括录制事件和状态回调） URL地址。
     * > 必须以`http://`或者`https://`开头。更多详情，请参见 [录制事件回调](~~55016~~)。
     * @example `http://demo.aliyundoc.com/examplecallback.action`
     */
    "NotifyUrl": string;
    /**
     * 是否需要录制任务状态回调。取值：
     * - true：是。如果NeedStatusNotify（是否需要录制任务状态回调）选择为**true**，则返回结果为录制状态回调示例。
     * - false（默认值）：否。
     * @example `false`
     */
    "NeedStatusNotify"?: boolean;
    /**
     * 按需录制回调URL地址。
     * > 必须以`http://`或者`https://`开头。更多详情，请参见[按需录制回调文档](~~85910~~)。
     * @example `http://learn.aliyundoc.com/ondemandcallback.action`
     */
    "OnDemandUrl"?: string;
}
