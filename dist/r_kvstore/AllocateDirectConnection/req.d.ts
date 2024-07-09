export interface AllocateDirectConnectionRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 直连地址的前缀，由小写英文字母或数字组成，以小写字母开头，长度为8~40字符。默认为实例ID+`-direct`，例如实例ID为r-8vbwsicr5d5gse****，则该参数默认为`r-8vbwsicr5d5gse****-direct`。
     * @example `redisdirect123`
     */
    "ConnectionString"?: string;
    /**
     * 端口号，取值范围为**1024**~**65535**，默认值为**6379**。
     * @example `6379`
     */
    "Port"?: string;
}
