export interface DescribeFileUploadSignedUrlRequest {
    /**
     * - 原始的文件名称。
     * - 当以"/"结尾时，创建一个空文件夹，支持多级子文件夹。创建文件夹时，不返回文件签名，自动完成创建。
     * @example `wlop29.jpg`
     */
    "Filename": string;
    /**
     * 文件大小，单位字节。
     * @example `41836`
     */
    "Size": number;
    /**
     * 服务空间ID。
     * @example `mp-0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
    /**
     * 文件类型：.pdf .xls .xlsx .doc .docx .ppt .pptx .txt
     * @example `png`
     */
    "ContentType": string;
    /**
     * 自定义上传文件路径，支持多级目录，路径支持字母、数字、中文、横线、下横线、点符号，总长度不超过1024，必须以"/"开头，例如：
     * `/abc/edf/hello.jpg`
     * > - 当该文件路径已存在文件时会直接覆盖
     * > - 另外也支持传入fileId或者文件url覆盖已有文件
     * @example `/abc/edf/hello.jpg`
     */
    "FileId"?: string;
}
