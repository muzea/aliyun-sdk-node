export interface SubmitReviewInfoResponse {
    /**
     * 结果代码，200表示成功。
     * > 若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 保存成功时返回复核后的质检得分。
     * @example `95`
     */
    Data: string;
    /**
     * 请求ID
     * @example `9987D326-83D9-4A42-B9A5-0B27F9B40539`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * 调用方可根据此字段来判断请求是否成功：
     * - true表示成功
     * - false/null表示失败
     * @example `true`
     */
    Success: boolean;
}
