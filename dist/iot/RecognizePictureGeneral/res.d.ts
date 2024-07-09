export interface RecognizePictureGeneralResponse {
    /**
     * 200表示成功。其它表示错误码。错误码详情，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用成功时，返回识别出的文本信息。
     * @example `{"content":"***升维大提速***进一步了解***","height":655,"orgHeight":655,"orgWidth":805,"prism_version":"1.0.9","prism_wnum":11,"prism_wordsInfo":[{"angle":-88,"direction":0,"height":111,"pos":[{"x":351,"y":45},{"x":461,"y":46},{"x":461,"y":67},{"x":351,"y":66}],"prob":99,"width":20,"word":"iPhone 12","x":396,"y":0}],"width":805}`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息，如果调用成功，没有ErrorMessage字段。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4C717018-B6D4-5EB0-8495-2A4FF08D58CA`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
