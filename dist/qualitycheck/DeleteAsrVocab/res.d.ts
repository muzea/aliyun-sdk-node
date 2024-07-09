export interface DeleteAsrVocabResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 热词ID，指定的vocabId
     * @example `71b1795ac8634bd8bdf4d3878480c7c2`
     */
    Data: string;
    /**
     * 请求ID
     * @example `4987D326-83D9-4A42-B9A5-0B27F9B40539`
     */
    RequestId: string;
    /**
     * 请求是否成功。调用方可根据此字段来判断请求是否成功：
     * - **true**表示成功
     * - **false/null**表示失败
     * @example `true`
     */
    Success: boolean;
}
