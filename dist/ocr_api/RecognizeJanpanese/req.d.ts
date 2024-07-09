export interface RecognizeJanpaneseRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制文件，最大10MB，与URL二选一。 使用HTTP方式调用，把图片二进制文件放到HTTP body 中上传即可。 使用SDK的方式调用，把图片放到SDK的body中即可
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * 是否输出单字识别结果
     * @example `false`
     */
    "OutputCharInfo"?: boolean;
    /**
     * 是否需要自动旋转功能（结构化检测、混贴场景、教育相关场景会自动做旋转，无需设置），返回角度信息
     * @example `false`
     */
    "NeedRotate"?: boolean;
    /**
     * 是否输出表格识别结果，包含单元格信息
     * @example `false`
     */
    "OutputTable"?: boolean;
}
