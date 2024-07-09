export interface ListPostQueryResultRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 地址。
     * @example `47.100.XX.XX`
     */
    "address"?: string;
    /**
     * sql: sql查询, ha3: ha3查询
     * @example `ha3`
     */
    "type"?: string;
    /**
     * 请求结构。
     * @example `{"assemblyQuery":"query=id:1&&cluster=general&&config=start:0,hit:10,format:json"}`
     */
    "body"?: any;
}
