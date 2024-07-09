export interface GetTranslateReportRequest {
    /**
     * 起始时间。
     * @example `2021-03-01 00:00:00`
     */
    "BeginTime": string;
    /**
     * 结束时间
     * @example `2021-03-01 23:59:59`
     */
    "EndTime": string;
    /**
     * API名称
     * - 机器翻译通用版：translate_standard
     * - 机器翻译专业版：translate_ecommerce
     * - 语种识别：predict_detect
     * - 通用图片翻译：it_general
     * - 电商图片翻译：it_ecommerce
     * - 文档翻译：dt_page
     * - 身份证翻译：ct_idcard
     * - 驾照翻译：ct_driving
     * @example `translate_standard`
     */
    "ApiName": string;
    /**
     * 分组。
     * @example `hour或者day`
     */
    "Group": string;
}
