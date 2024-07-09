export interface ExtractDocumentTextRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~477051~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 源数据的存储地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object`
     */
    "SourceURI": string;
    /**
     * 源数据的后缀类型。默认根据输入对象的后缀名确定源数据的类型。当输入对象没有后缀名时，可以设置此参数，可选值如下。
     * - 文字文档（Word）：doc、docx、wps、wpss、docm、dotm、dot、dotx、html
     * - 演示文档（PPT）：pptx、ppt、pot、potx、pps、ppsx、dps、dpt、pptm、potm、ppsm、dpss
     * - 表格文档（Excel）：xls、xlt、et、ett、xlsx、xltx、csv、xlsb、xlsm、xltm、ets
     * - PDF文档：pdf
     * @example `docx`
     */
    "SourceType"?: string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
