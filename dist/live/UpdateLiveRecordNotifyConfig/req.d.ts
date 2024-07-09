export interface UpdateLiveRecordNotifyConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 录制回调（包括事件回调和状态回调）URL地址。
     * > - 必须以`http://`或`https://`开头。
     * - 为了正常识别输入的汉字、空格以及其他特殊字符，需要做URLEncoder编码。
     * @example `http://learn.aliyundoc.com/examplecallback.action`
     */
    "NotifyUrl": string;
    /**
     * 按需回调URL地址。
     * > - 必须以`http://`或`https://`开头。
     * - 为了正常识别输入的汉字、空格以及其他特殊字符，需要做URLEncoder编码。
     * @example `http://guide.aliyundoc.com/ondemandcallback.action`
     */
    "OnDemandUrl"?: string;
    /**
     * 是否需要录制任务状态回调。取值：
     * - **true**：需要录制任务状态回调。
     * - **false**（默认值）：不需要录制任务状态回调。
     * @example `false`
     */
    "NeedStatusNotify"?: boolean;
}
