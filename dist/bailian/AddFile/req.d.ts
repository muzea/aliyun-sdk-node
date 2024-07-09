export interface AddFileRequest {
    /**
     * 文件上传租约Id，对应ApplyFileUploadLease接口返回的FileUploadLeaseId。
     * @example `68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847`
     */
    "LeaseId": string;
    /**
     * 解析器类型枚举值，目前已开放取值：DASHSCOPE_DOCMIND，即阿里云文档智能解析。
     * @example `DASHSCOPE_DOCMIND`
     */
    "Parser": string;
    /**
     * 类目ID，取值请登录百炼（数据中心-数据管理）页面查看，允许传入“default”，即使用系统创建的"默认类目"。
     * @example `cate_cdd11b1b79a74e8bbd675c356a91ee3510024405`
     */
    "CategoryId": string;
    /**
     * 业务空间id，请登录百炼后，在左上角业务空间详情中获取。
     * @example `ws_3AXoiweeTyTd03IN`
     */
    "WorkspaceId": string;
}
