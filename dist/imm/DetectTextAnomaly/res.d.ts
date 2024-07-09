export interface DetectTextAnomalyResponse {
    /**
     * 当次请求的Request ID。
     * @example `91AC8C98-0F36-49D2-8290-742E24DF*****`
     */
    RequestId: string;
    /**
     * 文本内容是否合规。返回值如下：
     * - pass：合规。
     * - block：不合规。
     * @example `pass`
     */
    Suggestion: string;
}
