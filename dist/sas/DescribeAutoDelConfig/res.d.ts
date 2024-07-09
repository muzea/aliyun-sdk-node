export interface DescribeAutoDelConfigResponse {
    /**
     * 在自动删除漏洞前云安全中心保存漏洞的天数。
     * @example `30`
     */
    Days: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C56F66FD-C4EE-4813-ABDC-4FF94B6C384E`
     */
    RequestId: string;
}
