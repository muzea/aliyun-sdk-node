export interface RecognizeTableRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeTable/RecognizeTable4.jpg`
     */
    "ImageURL": string;
    /**
     * 输出格式为`json`。（`html`、`xlsx`已废弃，当选择`html`、`xlsx`入参，最终输出也为JSON格式。）
     * @example `json`
     */
    "OutputFormat": string;
    /**
     * 是否使用财务报表模型。
     * - true：财务报表模型
     * - false：非财务报表模型
     * @example `true`
     */
    "UseFinanceModel": boolean;
    /**
     * 图像方向是否确定为正向。
     * - true：正向
     * - false：反向
     * @example `false`
     */
    "AssureDirection": boolean;
    /**
     * 是否无线条。
     * - true：无线条或者只有横线没有竖线
     * - false：有线条
     * @example `false`
     */
    "HasLine": boolean;
    /**
     * 是否跳过检测。
     * - true：跳过检查
     * - false：不跳过检查
     * @example `false`
     */
    "SkipDetection": boolean;
}
