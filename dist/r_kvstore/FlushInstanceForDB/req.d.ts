export interface FlushInstanceForDBRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 指定DB的索引号，取值为[0, 255]。
     * @example `1`
     */
    "DbIndex": number;
}
