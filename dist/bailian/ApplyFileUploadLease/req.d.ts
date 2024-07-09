export interface ApplyFileUploadLeaseRequest {
    /**
     * 类目ID，取值请登录百炼（数据中心-数据管理）页面查看，允许传入“default”，即使用系统创建的"默认类目"。
     * @example `cate_cdd11b1b79a74e8bbd675c356a91ee3510024405`
     */
    "CategoryId": string;
    /**
     * 上传文件的完整名称，该名称会展示在百炼数据管理页面上。支持的文件类型：pdf、doc、docx、md、txt、ppt、pptx。
     * 文件名称长度限制4-128个字符。
     * @example `测试文件名.pdf`
     */
    "FileName": string;
    /**
     * 文件MD5值，文件服务器会验证该字段，请正确填写。
     * @example `19657c391f6c70bcea63c154d8606bb3`
     */
    "Md5": string;
    /**
     * 文件内容长度，单位字节，文件服务器会验证该字段，请正确填写。取值范围：1B-100M。
     * @example `1000`
     */
    "SizeInBytes": string;
    /**
     * 业务空间id，请登录百炼后，在左上角业务空间详情中获取。
     * @example `ws_3AXoiweeTyTd03IN`
     */
    "WorkspaceId": string;
}
