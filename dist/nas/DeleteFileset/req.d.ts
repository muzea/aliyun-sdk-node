export interface DeleteFilesetRequest {
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * Fileset ID。
     * @example `fset-1902718ea0ae****`
     */
    "FsetId": string;
    /**
     * 是否对此次删除请求执行预检。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际删除实例。
     * 取值：
     * - true：发送检查请求，不会删除实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode。
     * - false（默认）：发送正常请求，通过检查后直接删除实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
