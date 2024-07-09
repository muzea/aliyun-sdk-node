export interface ListMultiPartyCollaborationChainRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 指定显示返回结果中的第几页，最小取值是1。
     * @example `1`
     */
    "Num": number;
    /**
     * 指定返回结果中每页显示的记录数量，最大值是100。
     * @example `1`
     */
    "Size": number;
    /**
     * 要查询的业务链名称。
     * > 不传则查询所有业务链。
     * @example `某业务链`
     */
    "Name"?: string;
}
