export interface CreateOfficeConversionTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 源数据的存储地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object`
     */
    "SourceURI": string;
    /**
     * 文档转换输出地址模板。
     * 地址规则为`oss://{bucket}/{tags.custom}/{dirname}/{barename}.{autoext}`。更多信息，请参见[TargetURI模板](~~465762~~)。
     * > 和 TargetURIPrefix 二者至少需要填一个。
     * @example `oss://{bucket}/{tags.custom}/{dirname}/{barename}.{autoext}`
     */
    "TargetURI"?: string;
    /**
     * 文档转换后输出文件的存储地址前缀。
     * 规则为oss://${Bucket}/，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称。
     * > 和 TargetURI 二者至少需要填一个。
     * @example `oss://test-bucket/`
     */
    "TargetURIPrefix"?: string;
    /**
     * 源数据的后缀类型。默认根据OSS对象的后缀名确定源数据的类型。当OSS对象没有后缀名时，可以设置此参数，可选值如下。
     * - 文字文档（Word）：doc、docx、wps、wpss、docm、dotm、dot、dotx、html
     * - 演示文档（PPT）：pptx、ppt、pot、potx、pps、ppsx、dps、dpt、pptm、potm、ppsm、dpss
     * - 表格文档（Excel）：xls、xlt、et、ett、xlsx、xltx、csv、xlsb、xlsm、xltm、ets
     * - PDF文档：pdf
     * @example `doc`
     */
    "SourceType"?: string;
    /**
     * 转换输出的目标文件类型。包括如下选项：
     * - png：转换为PNG格式的图片文件。
     * - jpg：转换为JPG格式的图片文件。
     * - pdf：转换为PDF文件。
     * - txt：转换为只包含文本内容的文件，主要用于提取文件的文本内容。源数据类型只支持演示文档、文字文档和表格文档。表格文档转换结果生成一个txt文件，sheet相关的变量设置不生效。
     * @example `png`
     */
    "TargetType": string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{
          "id": "test-id",
          "name": "test-name"
    }`
     */
    "UserData"?: string;
    /**
     * 自定义标签信息，字典格式。用于搜索任务。
     * @example `{
          "key": "value"
    }`
     */
    "Tags"?: any;
    /**
     * 文档转换的起始页，默认值为1。
     * >如果源文件为表格文档需要指定工作表页码（SheetIndex）。
     * @example `1`
     */
    "StartPage"?: number;
    /**
     * 文档转换的结束页，默认值为-1，表示转换所有页。
     * >- 如果源文件为表格文档需要指定工作表页码（SheetIndex）。
     * >- 如果页码太多，建议分批转换，否则可能会导致转换超时。
     * @example `-1`
     */
    "EndPage"?: number;
    /**
     * 文档的打开密码。如果需要转换有密码的文档，请设置此参数。
     * @example `123456`
     */
    "Password"?: string;
    /**
     * 文档缩放比例，取值范围为20~200，默认值为100，表示不缩放。
     * > 小于100表示缩小，大于100表示放大。
     * @example `100`
     */
    "ScalePercentage"?: number;
    /**
     * 转换文件的质量，取值范围为0（质量最差，性能最好）~100（质量最好，性能最差）。默认情况下，系统会根据文档内容，在质量和性能中权衡，设置合适的值。
     * @example `60`
     */
    "Quality"?: number;
    /**
     * 指定转换页码。优先级高于参数StartPage和参数EndPage。格式如下：
     * - 多个页码用半角逗号（,）隔开，例如1,2。
     * - 连续页码用短划线（-）连接，例如1,2-4,7。
     * @example `1,2-4,7`
     */
    "Pages"?: string;
    /**
     * 表格文档转换为图片的最大行数，默认转换所有行。
     * >当参数**LongPicture**取值为`true`时，此参数生效。
     * @example `10`
     */
    "MaxSheetRow"?: number;
    /**
     * 表格文档转换为图片的最大列数，默认转换所有列。
     * >当参数**LongPicture**取值为`true`时，此参数生效。
     * @example `10`
     */
    "MaxSheetColumn"?: number;
    /**
     * 表格文档中转换为图片的工作表（sheet）的数量，默认转换所有工作表。
     * @example `1`
     */
    "SheetCount"?: number;
    /**
     * 表格文档中转换为图片的工作表（sheet）的页码，取值范围为1~最后一个sheet页。默认转换起始页为1。
     * @example `1`
     */
    "SheetIndex"?: number;
    /**
     * 表格文档转换为图片或者PDF文件时，是否将所有列输出到一张图片或者PDF页面。取值范围如下：
     * - false（默认）：否。输出成多张图片，多张PDF页面。
     * - true：是。输出成一张图片，一张PDF页面。
     * @example `false`
     */
    "FitToWidth"?: boolean;
    /**
     * 表格文档转换为图片或者PDF文件时，是否将所有行输出到一张图片或者PDF页面。取值范围如下：
     * - false（默认）：否。输出成多张图片，多张PDF页面。
     * - true：是。输出成一张图片，一张PDF页面。
     * @example `false`
     */
    "FitToHeight"?: boolean;
    /**
     * 表格文档转换为图片时，是否只返回转换结果的第一张图片（图片包含的行数和列数为自动切割的结果）。取值范围如下：
     * - false（默认）：否。返回所有图片。
     * - true：是。只返回第一张图片（提取缩略图）。
     * >仅当参数**LongPicture**取值为`true`时，此参数生效。
     * @example `false`
     */
    "FirstPage"?: boolean;
    /**
     * 表格文档转换为图片时的纸张大小（输出图片可以类比为在纸张上面打印）。取值范围如下：
     * - A0
     * - A2
     * - A4（默认）
     * > 需配合参数**FitToHeight**和参数**FitToWidth**一起使用，此参数才能生效。
     * @example `A4`
     */
    "PaperSize"?: string;
    /**
     * 表格文档转换为图片时纸张是否水平放置（输出图片可以类比为在纸张上面打印）。取值范围如下：
     * - false（默认）：否。垂直放置。
     * - true：是。水平放置。
     * @example `false`
     */
    "PaperHorizontal"?: boolean;
    /**
     * 表格文档转换的瘦身策略。比如表格中有很多没有内容的行列，在没有瘦身策略的情况下，可能会输出很多空白。
     */
    "TrimPolicy"?: any;
    /**
     * 文字文档转换为图片时，是否显示批注。取值范围如下：
     * - false（默认）：否。不显示批注。
     * - true：是。显示批注。
     * @example `false`
     */
    "ShowComments"?: boolean;
    /**
     * 文档转换为图片时是否转换为一张长图。取值范围如下：
     * - false（默认）：否。转换成多张图。
     * - true：是。转换成一张长图。
     * > 最多支持将20页文档合成一张长图，超过该页数的转换任务可能会报错。
     * @example `false`
     */
    "LongPicture"?: boolean;
    /**
     * 输出图片DPI，取值范围为96~600，默认值为96。
     * @example `96`
     */
    "ImageDPI"?: number;
    /**
     * 文档转换为文本时是否转换为长文本文件。取值范围如下：
     * - false（默认）：否。每页文档转换为独立的文本文件。
     * - true：是。所有内容都放到一个文本文件中。
     * @example `false`
     */
    "LongText"?: boolean;
    /**
     * 文档转换为文本时是否保留文档中的换行符。取值范围如下：
     * - false（默认）：否。不保留换行符。
     * - true：是。保留换行符。
     * @example `false`
     */
    "HoldLineFeed"?: boolean;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
