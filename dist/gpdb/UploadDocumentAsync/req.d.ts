export interface UploadDocumentAsyncRequest {
    /**
     * 开启了向量引擎优化加速的实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 文档库名称。
     * > 由[CreateDocumentCollection](~~2618448~~)接口创建。您可以调用[ListDocumentCollections](~~2618452~~)接口查看已经创建的文档库。
     * @example `document`
     */
    "Collection": string;
    /**
     * 命名空间，默认为public。
     * > 您可以通过CreateNamespace接口创建，通过ListNamespaces接口查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 命名空间对应的密码。
     * > 本值为CreateNamespace接口指定。
     * @example `testpassword`
     */
    "NamespacePassword": string;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文件名。
     * ><notice>
     * - 文件建议带有文档类型后缀，如`.json`、`.md`或`.pdf`。如果不带后缀，将使用默认的非结构化加载器加载。
     * - 图片文件必须带有文件后缀，当前支持的图片后缀：`bmp`、`jpg`、`jpeg`、`png`和`tiff`。
     * - 图片文件支持上传压缩包，压缩包必须带有文件后缀，支持的压缩包格式：`tar`、`gz`和`zip`。
     * </notice>
     * @example `mydoc.txt`
     */
    "FileName": string;
    /**
     * 公网可访问的文档URL地址。
     * >
     * > - 建议使用SDK调用此接口，SDK帮封装了UploadDocumentAsyncAdvance方法可直接上传本地文件。
     * > - 如果是图片压缩包地址，当前压缩包里的图片数目最多为100张。
     * @example `https://xx/mydoc.txt`
     */
    "FileUrl": string;
    /**
     * 元数据信息，需和创建文档库（CreateDocumentCollection）时指定的Metadata字段一致。
     */
    "Metadata"?: any;
    /**
     * 处理大型数据的切分策略：数据拆分成较小的部分时每个块的大小。最大值2048。
     * @example `250`
     */
    "ChunkSize"?: number;
    /**
     * 处理大型数据的切分策略：在分块处理时，连续的块之间重叠的数据量。最大值不能超过ChunkSize。
     * > 这是为了防止数据被截断而丢失上下文信息。例如，在处理一个长文本时，您可能希望确保两个连续的文本块有一定量的重叠文本，这样模型就可以更好地理解两个块之间的上下文关系。
     * @example `50`
     */
    "ChunkOverlap"?: number;
    /**
     * 处理大型数据的切分策略：分隔符。
     * > - Seprators是影响切分效果的关键参数，且和TextSplitterName指定的切分器相关。
     * > - 一般情况下不许指定，服务端会按照TextSplitterName自动适配。
     */
    "Separators"?: string[];
    /**
     * 是否只做文档理解和切分，不做向量化和入库。默认为false。
     * > 当不确定文档切分效果时，可先设置此值为true查看切分效果进行调优。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否开启中文标题加强。
     * > 文档理解时，通过增加标题判断，判断哪些文本为标题，并在metadata中进行标记， 然后将文本与往上一级的标题进行拼合，实现文本信息的增强。
     * @example `false`
     */
    "ZhTitleEnhance"?: boolean;
    /**
     * 切分器名称。取值说明：
     * - **ChineseRecursiveTextSplitter**（默认值）：继承于RecursiveCharacterTextSplitter，默认以`["\n\n","\n", "。|！|？","\.\s|\!\s|\?\s", "；|;\s", "，|,\s"]`作为分隔符，使用正则匹配，中文比RecursiveCharacterTextSplitter效果更好一些。
     * - **RecursiveCharacterTextSplitter**：默认以`["\n\n", "\n", " ", ""]`作为分隔符。可以支持`c++/go/java/js/php/proto/python/rst/ruby/rust/scala/swift/markdown/latex/html/sol/csharp`等多种代码语言的切分。
     * - **SpacyTextSplitter**：默认分隔符为`\n\n`，使用Spacy库的en_core_web_sm模型来分隔；对全英文文档支持较好。
     * - **MarkdownHeaderTextSplitter**：针对markdown类型，使用` [ ("#", "head1"),  ("##", "head2"),  ("###", "head3"), ("####", "head4") ]`来切分。
     * @example `ChineseRecursiveTextSplitter`
     */
    "TextSplitterName"?: string;
    /**
     * 建议无需指定，会按照文件扩展名自动匹配加载器，支持的列表如下：
     * - UnstructuredHTMLLoader：`.html`
     * - UnstructuredMarkdownLoader：`.md`
     * - PyMuPDFLoader：`.pdf`
     * - PyPDFLoader：`.pdf`
     * - RapidOCRPDFLoader：`.pdf`
     * - PDFWithImageRefLoader: `.pdf` （具有图文关联功能）
     * - JSONLoader：`.json`
     * - CSVLoader：`.csv`
     * - RapidOCRLoader：`.png`、.`jpg`、`.jpeg`或`.bmp`
     * - UnstructuredFileLoader：`.eml`、`.msg`、`.rst`、`.txt`、`.docx`、`.epub`、`.odt`、`.pptx`或`.tsv`
     * @example `PyMuPDFLoader`
     */
    "DocumentLoaderName"?: string;
}
