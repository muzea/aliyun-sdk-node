export interface DescribeFileRequest {
    /**
     * 业务空间id，请登录百炼后，在左上角业务空间详情中获取
     * @example `ws_3AXoiweeTyTd03IN`
     */
    "WorkspaceId": string;
    /**
     * 文件唯一ID，您可以从百炼控制台获取，或者从AddFile接口的返回值中获取
     * @example `file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX`
     */
    "FileId": string;
}
