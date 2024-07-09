export interface RecognizeJanpaneseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"いくら飞すか (多少钱?) ","height":384,"orgHeight":384,"orgWidth":512,"prism_version":"1.0.9","prism_wnum":2,"prism_wordsInfo":[{"angle":-89,"direction":0,"height":508,"pos":[{"x":2,"y":85},{"x":509,"y":85},{"x":509,"y":170},{"x":2,"y":170}],"prob":99,"width":84,"word":"いくら飞すか","x":213,"y":-126}],"width":512}`
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
