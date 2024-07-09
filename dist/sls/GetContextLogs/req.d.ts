export interface GetContextLogsRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `test-logstore`
     */
    "logstore": string;
    /**
     * Logstore中数据的类型。该接口中该参数固定为context_log。
     * @example `context_log`
     */
    "type": string;
    /**
     * 起始日志所属的LogGroup的唯一身份标识。
     * @example `85C897C740352DC6-808`
     */
    "pack_id": string;
    /**
     * 起始日志在对应LogGroup内的唯一上下文结构标识。
     * @example `2|MTY1NTcwNTUzODY5MTY0MDk1Mg==|3|0`
     */
    "pack_meta": string;
    /**
     * 指定起始日志往前（上文）的日志条数，取值范围为`(0,100]`。
     * @example `10`
     */
    "back_lines": number;
    /**
     * 指定起始日志往后（下文）的日志条数，取值范围为`(0,100]`。
     * @example `10`
     */
    "forward_lines": number;
}
