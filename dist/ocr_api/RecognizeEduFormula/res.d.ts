export interface RecognizeEduFormulaResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"y = \\sqrt { \\frac { \\left( x - 1 \\right) \\cos 2 x } { \\left( 2 x + 3 \\right) \\left( 3 - 4 x \\right) } }","height":122,"imageBase64":"图片base64","orgHeight":122,"orgWidth":472,"prism_version":"1.0.9","prism_wnum":0,"prism_wordsInfo":[],"width":472}`
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
