export interface CreateRecycleBinRestoreJobRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 待恢复的文件或目录的FileId。
     * 您可以通过调用[ListRecentlyRecycledDirectories ](~~2412173~~)接口查询FileId信息。
     * @example `04***08`
     */
    "FileId": string;
    /**
     * 文件恢复后所存储目录的FileId。
     * 您可以通过调用[ListDirectoriesAndFiles](~~213743~~)接口查询TargetFileId信息。
     * @example `13***15`
     */
    "TargetFileId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * >若您未指定ClientToken，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
