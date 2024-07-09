export interface RecognizeInvoiceRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `https://img.alicdn.com/tfs/TB1qIIfXAPoK1RjSZKbXXX1IXXa-808-523.jpg`
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
     * * 指定识别的PDF/OFD页码；例如：pageNo=6，识别PDF/OFD的第六页。
     * * 如果该参数为空，或传值大于PDF/OFD总页数，则识别PDF/OFD的第一页。
     * * 如果使用SDK设置此参数，请更新SDK版本，该参数在SDK版本1.1.16开始支持。
     * @example `1`
     */
    "PageNo"?: number;
}
