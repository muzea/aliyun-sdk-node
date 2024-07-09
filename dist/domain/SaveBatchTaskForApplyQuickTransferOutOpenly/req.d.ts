export interface SaveBatchTaskForApplyQuickTransferOutOpenlyRequest {
    /**
     * 域名列表
     */
    "DomainNames"?: string[];
    /**
     * 接口返回错误信息语言。取值：zh：中文；                                 en：英文。                                 默认为en。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户请求ip
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
