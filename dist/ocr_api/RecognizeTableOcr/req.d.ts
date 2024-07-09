export interface RecognizeTableOcrRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `https://example.png`
     */
    "Url"?: string;
    /**
     * * 本字段和URL字段二选一，不可同时透传或同时为空。
     * * 图片二进制文件，最大10MB。
     * * 使用HTTP方式调用，把图片二进制文件放到HTTP body中上传即可。
     * * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * * 是否需要自动旋转功能，默认需要。
     * * true：需要；false：不需要。
     * @example `true`
     */
    "NeedRotate"?: boolean;
    /**
     * * 是否无线条或者只有横线没有竖线,默认有线条。
     * * true：无线条；false：有线条。
     * @example `false`
     */
    "LineLess"?: boolean;
    /**
     * * 是否跳过检测，默认为false。
     * * true：跳过检查；false：不跳过检查。
     * @example `false`
     */
    "SkipDetection"?: boolean;
    /**
     * * 是否是手写表格，默认不是。
     * * true：是手写表格；false：不是手写表格。
     * * 注意：该字段是字符串类型。
     * @example `false`
     */
    "IsHandWriting"?: string;
}
