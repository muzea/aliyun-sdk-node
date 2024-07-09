export interface GetMongoDBCurrentOpRequest {
    /**
     * 实例ID。
     * @example `dds-uf6079bda570****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 不提供节点ID时，默认获取Primary节点会话。
     * @example `23302531`
     */
    "NodeId"?: string;
    /**
     * 预留参数，可不传递。
     * @example `None`
     */
    "Role"?: string;
    /**
     * 采用`db.currentOp()`命令在获取会话时进行过滤，命令详情请参考MongoDB的[db.currentOp()](https://docs.mongodb.com/manual/reference/method/db.currentOp/)命令。
     * @example `{ "active" : true }`
     */
    "FilterDoc"?: string;
}
