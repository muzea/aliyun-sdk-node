export interface GenerateWebofficeTokenRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 待预览或编辑文档的OSS地址。
     * OSS地址规则为`oss://${Bucket}/${Object}`，其中`Bucket`为和当前项目处于同一地域的OSS Bucket名称，`Object`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object.docx`
     */
    "SourceURI": string;
    /**
     * 文件名称，必须包含文件扩展名。默认为参数**SourceURI**的最后一级。
     * 支持的文件扩展名（其中PDF只支持预览）：
     * - 文字文档（Word）：doc、docx、txt、dot、wps、wpt、dotx、docm、dotm、rtf
     * - 演示文档（PPT）：ppt、pptx、pptm、ppsx、ppsm、pps、potx、potm、dpt、dps
     * - 表格文档（Excel）：et、xls、xlt、xlsx、xlsm、xltx、xltm、csv
     * - PDF 文档：pdf
     * @example `test-Object.pptx`
     */
    "Filename"?: string;
    /**
     * 缓存预览标识：
     * -  true：开启后，文档预览时将不再更新协同编辑内容，适用于仅预览的场景。
     * -  false：关闭时，默认采用协同预览，及预览时候可以同步更新协同编辑内容。
     * ><notice>缓存预览和非缓存预览的单价不同，详情请查看计费项说明。></notice>
     * @example `true、false`
     */
    "CachePreview"?: boolean;
    /**
     * OSS防盗链。IMM需要从OSS中获取源文件，如果OSS进行了防盗链设置，IMM需要将对应的头部传给OSS才能获取源文件。
     * > 如果访问文档所在的Bucket设置了Referer，请设置此参数。
     * @example `*`
     */
    "Referer"?: string;
    /**
     * 用户自定义信息，必须填写Notification参数传入MNS配置时才能生效，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{
          "id": "test-id",
          "name": "test-name"
    }`
     */
    "UserData"?: string;
    /**
     * 限制只能预览前几页，默认不限制。最大不能超过5000
     * @example `5`
     */
    "PreviewPages"?: number;
    /**
     * 文档的打开密码。
     * >如果需要预览或编辑有密码的文档，请设置此参数。
     * @example `123456`
     */
    "Password"?: string;
    /**
     * 是否支持直接上传文档到OSS。可取值如下：
     * - true：支持，上传的文档将覆盖原文档生成新版本。在开启后，仍需先关闭当前正在编辑的文档，然后等待约5分钟后重新打开，才能加载新的文档。仅当文档处于关闭状态时才可上传，文档处于打开状态时，新的保存会覆盖掉上传的文件。
     * - false（默认）：不支持，上传文档是非预期行为，会返回错误。
     * @example `false`
     */
    "ExternalUploaded"?: boolean;
    /**
     * 支持将一些事件以 MNS 消息的方式通知给客户。该参数为 MNS 异步消息通知的 topic。
     * @example `test-topic`
     */
    "NotifyTopicName"?: string;
    /**
     * 是否隐藏工具栏，文档预览模式下支持设置此参数。可取值如下：
     * - false（默认）：不隐藏工具栏。
     * - true：隐藏工具栏。
     * @example `false`
     */
    "Hidecmb"?: boolean;
    /**
     * 用户权限信息，以JSON格式表示。
     * 用户权限包括如下选项：
     * 每个选项的类型均为Boolean，默认值均为false，可选值为true和false。
     * - Readonly（可选）：预览模式。
     * - Rename（可选）：重命名文件权限，只提供消息通知功能，重命名事件会发送到MNS中。
     * - History（可选）：查看历史版本的权限。
     * - Copy（可选）：拷贝权限。
     * - Export（可选）：导出PDF权限。
     * - Print（可选）：打印权限。
     * >PDF仅支持预览功能，因此必须将” Readonly“参数设置为true。
     * >
     * > 若要使用多版本功能，必须先在OSS中开通多版本功能，然后将 ”History“参数设置为true。
     * >
     */
    "Permission"?: any;
    /**
     * 用户信息。可以传业务的用户信息，WebOffice页面会进行显示，如无特殊要求可填入"Unknown"。如果不传入此字段，用户信息会默认显示为“Unknown”。
     */
    "User"?: any;
    /**
     * 水印信息。该水印在前端生成，并没有写入到源文档中，同一个文档传入不同的参数会得到不同的水印。
     */
    "Watermark"?: any;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * Notification 消息通知配置，目前仅支持MNS，异步通知消息格式请参考[WebOffice消息通知格式](https://help.aliyun.com/zh/imm/developer-reference/weboffice-notification-message-examples?spm=a2c4g.11186623.0.0.7ee46295bRAbGt)。
     * > 文件保存和文件重命名时会有消息通知。
     */
    "Notification"?: any;
}
