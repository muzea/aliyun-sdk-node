export interface SubmitQualityCheckTaskResponse {
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
     * 任务ID。
     * @example `F6C2B68F-2311-4495-82AC-DAE86C9****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `00A044A2-D59B-4104-96BA-84060AE8345F`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
}
