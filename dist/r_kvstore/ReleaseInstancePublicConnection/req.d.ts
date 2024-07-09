export interface ReleaseInstancePublicConnectionRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 待释放的公网连接地址。
     * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
}
