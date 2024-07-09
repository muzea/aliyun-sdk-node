export interface DescribeFileModerationResultRequest {
    /**
     * 文件检测增强版支持的服务
     * @example `document_detection`
     */
    "Service"?: string;
    /**
     * 审核服务需要的参数集，JSON字符串格式。
     * - taskId：必填，待检测对象的URL，请确保该URL能通过公网访问到。
     * @example `{\"taskId\":\"vi_f_hPgx9PFIQISdlfA888hOFG-1yJq8v\"}`
     */
    "ServiceParameters"?: string;
}
