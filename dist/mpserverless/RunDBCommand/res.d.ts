export interface RunDBCommandResponse {
    /**
     * 请求ID。
     * @example `F75E60FA-7583-4E2E-AC14-6C608F89804`
     */
    RequestId: string;
    /**
     * 数据库返回结果，格式为 JSON String。
     * @example `{"_id":"5d107e5af957c439d505b95b","age":1,"name":"aaaaa","time":1561362071732}`
     */
    Result: string;
    /**
     * 此次操作影响的数据库文档数量。
     * @example `1`
     */
    AffectedDocs: number;
}
