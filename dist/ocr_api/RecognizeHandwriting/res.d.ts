export interface RecognizeHandwritingResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"炼句 提问方式 1.请赏析诗歌某一联(句) 2.赏析某一联(句)的妙处 3.请赏析诗歌某、角度抒胸意、借景抒情、托物","height":1277,"orgHeight":1277,"orgWidth":1080,"prism_version":"1.0.9","prism_wnum":26,"prism_wordsInfo":[{"angle":-87,"direction":0,"height":83,"pos":[{"x":177,"y":56},{"x":260,"y":60},{"x":259,"y":88},{"x":176,"y":84}],"prob":96,"width":28,"word":"炼句","x":203,"y":30}],"width":1080}`
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
