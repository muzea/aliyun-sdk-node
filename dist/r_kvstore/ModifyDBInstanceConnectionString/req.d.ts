export interface ModifyDBInstanceConnectionStringRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 新连接地址的前缀。Redis连接地址格式为：`<前缀>.redis.rds.aliyuncs.com`。地址前缀需由小写英文字母、数字组成，但必须以小写字母开头，长度为8~40个字符。
     * > 请求参数**NewConnectionString**和**Port**两者中必须传入一项。
     * @example `standardredis123`
     */
    "NewConnectionString"?: string;
    /**
     * Redis实例当前的连接地址。
     * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * Redis服务的端口号，取值范围：**1024**~**65535**。
     * > 请求参数**NewConnectionString**和**Port**两者中必须传入一项。
     * @example `6379`
     */
    "Port"?: string;
    /**
     * 地址的网络类型，取值：
     * * **Private**：专有网络。
     * * **Public**：公网。
     * @example `Public`
     */
    "IPType"?: string;
}
