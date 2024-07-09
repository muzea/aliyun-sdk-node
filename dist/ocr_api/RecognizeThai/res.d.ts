export interface RecognizeThaiResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"angle":0,"content":"4สัป าR  ๗  เริมเห็นผิวที่เรียบเบียน  วิรีการใช้ LEshop uA","height":887,"orgHeight":887,"orgWidth":790,"prism_version":"1.0.9","prism_wnum":26,"prism_wordsInfo":[{"angle":-89,"direction":0,"height":210,"pos":[{"x":285,"y":14},{"x":495,"y":14},{"x":495,"y":63},{"x":285,"y":63}],"prob":85,"width":48,"word":"4สัป าR ","x":365,"y":-66}],"width":790}`
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
