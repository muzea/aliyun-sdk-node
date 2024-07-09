export interface RecognizeDocumentStructureRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）。
     * @example `https://img.alicdn.com/imgextra/i4/O1CN01amMFBF1GUki3NHNzI_!!6000000000626-2-tps-978-1346.png`
     */
    "Url"?: string;
    /**
     * 图片二进制文件，最大10MB，与URL二选一。
     * 使用HTTP方式调用，把图片二进制文件放到HTTP body 中上传即可。
     * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * 是否需要自动旋转功能，返回角度信息。默认不需要。true：需要 false：不需要。
     * @example `false`
     */
    "NeedRotate"?: boolean;
    /**
     * 是否输出单字识别结果，默认不需要。true：需要 false：不需要。
     * 当UseNewStyleOutput=true时，此参数不生效。
     * @example `false`
     */
    "OutputCharInfo"?: boolean;
    /**
     * 是否输出表格识别结果，包含单元格信息。默认不需要。true：需要 false：不需要。
     * @example `false`
     */
    "OutputTable"?: boolean;
    /**
     * 是否按顺序输出文字块，默认不需要。true：需要 false：不需要。false表示从左往右，从上到下的顺序；true表示从上到下，从左往右的顺序。
     * 当UseNewStyleOutput=true时，此参数不生效。
     * @example `false`
     */
    "NeedSortPage"?: boolean;
    /**
     * 是否需要分页功能，默认不需要。 true：需要 false：不需要。
     * 当UseNewStyleOutput=true时，此参数不生效。
     * @example `false`
     */
    "Page"?: boolean;
    /**
     * 是否需要去除印章功能，默认不需要。true：需要 false：不需要
     * @example `false`
     */
    "NoStamp"?: boolean;
    /**
     * 是否需要分段功能，默认不需要。true：需要 false：不需要。
     * 当UseNewStyleOutput=true时，此参数不生效。
     * @example `false`
     */
    "Paragraph"?: boolean;
    /**
     * 是否需要成行返回功能，默认不需要。true：需要 false：不需要。
     * 当UseNewStyleOutput=true时，此参数不生效。
     * @example `false`
     */
    "Row"?: boolean;
    /**
     * 是否返回新版格式输出，默认为false
     * @example `false`
     */
    "UseNewStyleOutput"?: boolean;
}
