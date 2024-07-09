export interface CountNodesByNodeGroupIdResponse {
    /**
     * 满足过滤条件的节点数。
     * @example `100`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
