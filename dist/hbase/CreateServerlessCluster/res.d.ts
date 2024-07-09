export interface CreateServerlessClusterResponse {
    /**
     * 请求ID。
     * @example `3E19E345-101D-4014-946C-************`
     */
    RequestId: string;
    /**
     * 集群访问密码。
     * @example `*********`
     */
    PassWord: string;
    /**
     * 订单ID。
     * @example `23232453233*****`
     */
    OrderId: string;
    /**
     * HBase Serverless实例ID。
     * @example `sh-bp1a969y7681****`
     */
    ClusterId: string;
}
