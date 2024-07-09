export interface DescribeDocumentResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 接口返回详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * API执行状态，取值如下：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
    /**
     * 文件名。
     * @example `music.txt`
     */
    FileName: string;
    /**
     * 文件扩展名。
     * @example `txt`
     */
    FileExt: string;
    /**
     * 文档版本。每次更新上传同一文档时，此值会+1。
     * @example `1`
     */
    FileVersion: number;
    /**
     * 文档最新修改时间。
     * @example `2023-11-01 10:01:01.123456`
     */
    FileMtime: string;
    /**
     * 文档来源。
     * @example `OSS
    `
     */
    Source: string;
    /**
     * 文档加载器名称。
     * @example `RapidOCRPDFLoader`
     */
    DocumentLoader: string;
    /**
     * 文档切分器名称。
     * @example `ChineseRecursiveTextSplitter`
     */
    TextSplitter: string;
    /**
     * 文件大小，单位为字节。
     * @example `10000`
     */
    FileSize: number;
    /**
     * 文件MD5值。
     * @example `b8078c9591413550f8963e37e24abcea`
     */
    FileMd5: string;
    /**
     * 文档被切分的数量。
     * @example `100`
     */
    DocsCount: number;
    /**
     * 文档的下载地址，有效期为2h。
     * @example `http://oss.xxx/music.txt`
     */
    FileUrl: string;
    /**
     * 被切分后的纯文本(不带Metadata)下载地址，每行是一个chunk，有效期为2h。
     * @example `http://oss.xxx/music_plain_chunk.txt`
     */
    PlainChunkFileUrl: string;
    /**
     * 切分后的文件链接，有效期为2h。文件格式为JSONL，每一行的格式为`{"page_content":"*****", "metadata": {"**":"***","**":"***"}`
     * @example `http://oss.xxx/music_chunk.jsonl`
     */
    ChunkFileUrl: string;
}
