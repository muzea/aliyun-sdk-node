export interface RecognizeEduOralCalculationResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"height":3024,"mathsInfo":[{"pos":[{"x":128,"y":456},{"x":481,"y":425},{"x":479,"y":526},{"x":127,"y":523}],"result":"right","title":"5 9 - 2 5 = 3 4"}],"orgHeight":3024,"orgWidth":2268,"prism_version":"1.0.9","prism_wnum":0,"prism_wordsInfo":[],"width":2268}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
