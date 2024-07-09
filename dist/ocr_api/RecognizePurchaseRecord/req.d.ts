export interface RecognizePurchaseRecordRequest {
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
     * @example `图片二进制`
     */
    "body"?: string;
    /**
     * * 是否需要识别多条订单，默认不需要。
     * * true：需要；false：不需要。
     * * 如果需要使用此参数，请更新SDK到1.1.14或更高版本。
     * * 注意：如果此参数设置为true，返回结果字段会变化。
     * @example `false`
     */
    "OutputMultiOrders"?: boolean;
}
