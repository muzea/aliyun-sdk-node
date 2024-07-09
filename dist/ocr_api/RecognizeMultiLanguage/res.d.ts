export interface RecognizeMultiLanguageResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"PACKING  Shipper/Export   Invoice No & Date  STM TECHNOLOGY INC. 20140730- ST44 ","height":1753,"orgHeight":1753,"orgWidth":1240,"prism_version":"1.0.9","prism_wnum":71,"prism_wordsInfo":[{"angle":0,"direction":0,"height":33,"pos":[{"x":348,"y":137},{"x":531,"y":135},{"x":532,"y":168},{"x":348,"y":170}],"prob":99,"recClassify":1,"width":184,"word":"PACKING","x":348,"y":135}],"width":1240}`
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
