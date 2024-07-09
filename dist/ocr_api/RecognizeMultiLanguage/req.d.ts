export interface RecognizeMultiLanguageRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg`
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
     * * 支持语言列表。
     */
    "Languages": string[];
    /**
     * * 是否输出单字识别结果，默认不需要。
     * * true：需要；false：不需要。
     * @example `false`
     */
    "OutputCharInfo"?: boolean;
    /**
     * * 是否需要自动旋转功能，默认需要。
     * * true：需要；false：不需要。
     * @example `true`
     */
    "NeedRotate"?: boolean;
    /**
     * * 是否输出表格识别结果，包含单元格信息，默认不需要。
     * * true：需要；false：不需要。
     * @example `false`
     */
    "OutputTable"?: boolean;
    /**
     * * 是否按顺序输出文字块，默认为false。
     * * false表示从左往右，从上到下的顺序；true表示从上到下，从左往右的顺序。
     * @example `false`
     */
    "NeedSortPage"?: boolean;
}
