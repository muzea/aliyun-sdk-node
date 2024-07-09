export interface AllocateInstancePublicConnectionRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 公网连接地址的前缀，需由小写英文字母与数字组成，以小写字母开头，长度为8~40个字符。
     * > 公网连接地址格式为：`<前缀>.redis.rds.aliyuncs.com`。
     * @example `r-bp1zxszhcgatnx****`
     */
    "ConnectionStringPrefix": string;
    /**
     * Redis服务端口，取值范围：**1024**~**65535**。
     * @example `6379`
     */
    "Port": string;
}
