export interface RecognizeRussianResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"Тэбако (коробочка для косметики) с рисунком в виде колес повозки","height":199,"orgHeight":199,"orgWidth":766,"prism_version":"1.0.9","prism_wnum":6,"prism_wordsInfo":[{"angle":-89,"direction":0,"height":722,"pos":[{"x":6,"y":23},{"x":728,"y":26},{"x":727,"y":43},{"x":5,"y":41}],"prob":99,"width":17,"word":"Тэбако (коробочка для косметики) с рисунком в виде колес повозки， покрытая","x":358,"y":-327}],"width":766}`
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
