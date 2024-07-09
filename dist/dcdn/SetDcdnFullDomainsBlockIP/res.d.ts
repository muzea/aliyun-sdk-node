export interface SetDcdnFullDomainsBlockIPResponse {
    /**
     * 结果信息码。
     * Code不为0的可能情况：参数不全、参数格式不正确等。
     * @example `0`
     */
    Code: number;
    /**
     * 结果信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `CB1A380B-09F0-41BB-802B-72F8FD6DA2FE`
     */
    RequestId: string;
}
