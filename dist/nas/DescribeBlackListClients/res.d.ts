export interface DescribeBlackListClientsResponse {
    /**
     * 请求ID。
     * @example `A70BEE5D-76D3-49FB-B58F-1F398211A5C3`
     */
    RequestId: string;
    /**
     * 返回客户端逐出的状态，是一个map类型的JSON格式字符串，格式：`{"client1": "EVICTING","client2":"EVICTED"}`。
     * 客户端逐出状态枚举值：
     * - EVICTING：正在逐出
     * - EVICTED：已逐出
     * - ACCEPTING：恢复中
     * - ACCEPTABLE：已恢复
     * @example `{"client1": "EVICTING","client2":"EVICTED"}`
     */
    Clients: string;
}
