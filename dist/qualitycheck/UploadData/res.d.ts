export interface UploadDataResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 该任务的taskId。
     * @example `6F5934C7-C223-4F0F-BBF3-5B3594***`
     */
    Data: string;
    /**
     * 请求ID，请求唯一标识，可以用来定位追踪请求。
     * @example `6F5934C7-C223-4F0F-BBF3-5B3594****`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
}
