export interface DescribeExcpetionCountResponse {
    /**
     * 受保护公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例等）中，状态异常的IP（例如，处于黑洞中等）的数量。
     * @example `0`
     */
    ExceptionIpCount: number;
    /**
     * 即将到期（剩余有效期不足7天）的DDoS原生防护实例的数量。
     * @example `1`
     */
    ExpireTimeCount: number;
    /**
     * 本次请求的ID。
     * @example `4B45279A-B1BE-5EEE-87CA-58AF4183EA58`
     */
    RequestId: string;
}
