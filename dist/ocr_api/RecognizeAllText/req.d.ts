export interface RecognizeAllTextRequest {
    /**
     * - 本字段和 body 字段二选一，不可同时透传或同时为空。
     * - 图片链接（长度不超过 2048，不支持 base64）。
     * @example `https://example.png`
     */
    "Url"?: string;
    /**
     * - 本字段和 URL 字段二选一，不可同时透传或同时为空。
     * - 图片二进制文件，最大 10MB。
     * - 使用 HTTP 方式调用，把图片二进制文件放到 HTTP body 中上传即可。
     * - 使用 SDK 的方式调用，把图片放到 SDK 的 body 中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * * 图片类型。**必选**参数，且为**单选**。
     * * 支持的图片类型请参考 **请求参数补充说明**。
     * * 请注意，对于票据卡证类图片，当图片真实类型和入参指定的**Type**不一致时，会导致识别失败。
     * @example `Advanced`
     */
    "Type": string;
    /**
     * - 是否需要图案检测功能。如果开启，会返回**FigureInfo**字段（详见返回参数说明）。
     * - true：需要；false：不需要。
     * - 默认值：不同图片类型（**Type**）的默认值不同，详见**请求参数补充说明**。
     * - 支持识别的图案类型如下：
     *     - blicense_title：营业执照标题
     *     - national_emblem：国徽
     *     - face：人脸图案
     *     - finger_print：指纹
     *     - signature：签名区域
     * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要识别图案时开启此参数。
     * @example `false`
     */
    "OutputFigure"?: boolean;
    /**
     * - 是否需要二维码检测功能。开启后会返回**QrCodeInfo**字段（详见返回参数说明）。
     * - true：需要；false：不需要。
     * - 默认值：false。
     * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要识别二维码时开启此参数。
     * @example `false`
     */
    "OutputQrcode"?: boolean;
    /**
     * - 是否需要条形码检测功能。开启后会返回**BarCodeInfo**字段（详见返回参数说明）。
     * - true：需要；false：不需要。
     * - 默认值：false。
     * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要识别条形码时开启此参数。
     * @example `false`
     */
    "OutputBarCode"?: boolean;
    /**
     * - 是否需要印章检测功能。开启后会返回**StampInfo**字段（详见返回参数说明）。
     * - true：需要；false：不需要。
     * - 默认值：false。
     * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要识别印章时开启此参数。
     * @example `false`
     */
    "OutputStamp"?: boolean;
    /**
     * - 返回坐标格式（**points**、**rectangle**）。
     * - points：四点坐标；rectangle：旋转矩形。
     * - 默认不需要传此参数，不返回文字坐标。
     * @example `""`
     */
    "OutputCoordinate"?: string;
    /**
     * - 是否需要返回原图坐标信息。 系统会自动对图片做处理（比如自动旋转、图片校正等），您可以设置返回的坐标口径，是“原图坐标”或“算法处理后图片坐标”。
     * - true：需要；false：不需要。
     * - 默认值：不同图片类型（**Type**）的默认值不同，详见**请求参数补充说明**。
     * - **请注意**：仅当**OutputCoordinate**不为空时，设置此参数才有意义。
     * @example `false`
     */
    "OutputOricoord"?: boolean;
    /**
     * - 是否需要把识别出的结构化信息转成 Excel 文件链接（默认不需要）。
     * - true：需要；false：不需要。
     * - 文件链接有效期为一小时。
     * - **注意**：开启此参数后，会增加接口的响应时间，请在需要时开启。
     * @example `false`
     */
    "OutputKVExcel"?: boolean;
    /**
     * - 指定识别的 PDF/OFD 页码；例如：PageNo=6，则识别 PDF/OFD 的第六页。
     * - 如果不传此参数，或传值大于 PDF/OFD 总页数，则识别 PDF/OFD 的第一页。
     * - 默认识别第一页。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * * 当图片类型为通用文字识别高精版时（**Type=Advanced**），可通过本字段设置可选功能。
     */
    "AdvancedConfig"?: {
        /**
         * - 是否需要成行返回功能。开启后会返回**RowInfo**字段（详见返回参数说明）。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * @example `false`
         */
        OutputRow: boolean;
        /**
         * - 是否需要分段功能。开启后会返回**ParagraphInfo**字段（详见返回参数说明）。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * @example `false`
         */
        OutputParagraph: boolean;
        /**
         * - 是否需要输出表格识别结果，包含单元格信息。开启后会返回**TableInfo**字段（详见返回参数说明）。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要识别表格时开启此参数。
         * @example `false`
         */
        OutputTable: boolean;
        /**
         * - 是否需要输出单字识别结果。开启后，**BlockInfo**字段中会返回**CharInfos**字段（详见返回参数说明）。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * @example `false`
         */
        OutputCharInfo: boolean;
        /**
         * - 是否为无线表格或表格只有横线没有竖线。
         * - true：无线表格；false：有线表格。
         * - 默认值：false。
         * - **请注意**：仅当**OutputTable=true**时，设置此参数才生效。
         * @example `false`
         */
        IsLineLessTable: boolean;
        /**
         * - 是否是手写表格。
         * - true：是手写表格；false：不是手写表格。
         * - 默认值：false。
         * - **请注意**：仅当**OutputTable=true**时，设置此参数才生效。
         * @example `false`
         */
        IsHandWritingTable: boolean;
        /**
         * - 是否将识别的表格结果导出成 Excel，并以文件链接形式返回。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * - 文件链接有效期为一小时。
         * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要时开启此参数。
         * @example `false`
         */
        OutputTableExcel: boolean;
        /**
         * - 是否将识别的表格结果导出成 Html 格式结果，并以文件链接形式返回。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * - 文件链接有效期为一小时。
         * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要时开启此参数。
         * @example `false`
         */
        OutputTableHtml: boolean;
    };
    /**
     * * 当图片类型为身份证时（**Type=IdCard**），可通过本字段设置可选功能。
     */
    "IdCardConfig"?: {
        /**
         * - 是否需要身份证质量检测功能。
         * - 身份证质量检测功能包含：是否翻拍，是否是复印件，完整度评分，整体质量分数。
         * - true：需要；false：不需要。
         * - 默认值：false。
         * - **请注意**：开启此参数后，会增加接口的响应时间，请在需要身份证质量检测功能时开启此参数。
         * @example `false`
         */
        OutputIdCardQuality: boolean;
    };
    /**
     * * 当图片类型为国际身份证时（Type=**InternationalIdCard**），可通过本字段设置可选功能。
     */
    "InternationalIdCardConfig"?: {
        /**
         * - 国家名称。
         * - 支持的国家类型：India，Vietnam，Korea，Bangladesh。
         * - 默认不需要传此参数，算法自动判断。
         * - **请注意**：如果指定国家名称，接口响应时间更短。
         * @example `India`
         */
        Country: string;
    };
    /**
     * * 当图片类型为国际企业执照时（Type=**InternationalBusinessLicense**），可通过本字段设置可选功能。
     */
    "InternationalBusinessLicenseConfig"?: {
        /**
         * * 国家名称。
         * * 支持的国家类型：India，Korea。
         * * 默认不需要传此参数，算法自动判断。
         * * 请注意：如果指定国家名称，接口响应时间更短。
         * @example `India`
         */
        Country: string;
    };
    /**
     * * 当图片类型为通用多语言文字时（Type=**MultiLang**），可通过本字段设置可选功能。
     */
    "MultiLanConfig"?: {
        /**
         * - 支持的语言列表。
         * - chn：中文，eng：英文，ja：日文，lading：拉丁，kor：韩文，sx：手写，tai：泰文，rus：俄文，mys：马来文，idn：印尼文，viet：越南文，ukr：乌克兰。
         * - **请注意**：可以同时传多个语言参数，用逗号分隔。例如：Languages="eng,chn,lading"。但如果您确认图片的语言类型，建议传一种语言参数，算法识别效果更好。
         * @example `eng,chn`
         */
        Languages: string;
    };
    /**
     * * 当图片类型为表格时（Type=**Table**），可通过本字段设置可选功能。
     */
    "TableConfig"?: {
        /**
         * * 是否是手写表格。
         * * true：是手写表格；false：不是手写表格。
         * * 默认值：false。
         * @example `false`
         */
        IsHandWritingTable: boolean;
        /**
         * * 是否为无线表格或表格只有横线没有竖线。
         * * true：无线表格；false：有线表格。
         * * 默认值：false。
         * @example `false`
         */
        IsLineLessTable: boolean;
        /**
         * * 是否将识别的表格结果导出成 Excel，并以文件链接形式返回。
         * * true：需要；false：不需要。
         * * 默认值：false。
         * * 文件链接有效期为一小时。
         * * **请注意**：开启此参数后，会增加接口的响应时间，请在需要时开启此参数。
         * @example `false`
         */
        OutputTableExcel: boolean;
        /**
         * * 是否将识别的表格结果导出成 Html 格式结果，并以文件链接形式返回。
         * * true：需要；false：不需要。
         * * 默认值：false。
         * * 文件链接有效期为一小时。
         * * **请注意**：开启此参数后，会增加接口的响应时间，请在需要时开启此参数。
         * @example `false`
         */
        OutputTableHtml: boolean;
    };
}
