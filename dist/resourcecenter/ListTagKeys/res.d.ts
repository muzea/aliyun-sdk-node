export interface ListTagKeysResponse {
    /**
     * 下一个查询开始Token。
     * @example `AAAAAUDnubHKJbVTCdlIGYUPtsu3EoN3bfdgjDA****`
     */
    NextToken: string;
    /**
     * 标签键列表。
     */
    TagKeys: string[];
    /**
     * 请求ID。
     * @example `44C8A952-D6B0-5BC8-82D5-93BA02E26F2E`
     */
    RequestId: string;
}
