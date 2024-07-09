export interface CreateUpstreamAppServerRequest {
    /**
     * iovcc项目工程ID。
     * @example `CS1HMVRF`
     */
    "ProjectId": string;
    /**
     * 服务端应用名称。
     * 由字母、数字和下划线组成，不超过15个字符。
     * @example `testServer`
     */
    "Name": string;
    /**
     * 上行业务消息tag，方便应用服务器端对上行消息分类处理。多个tag通过英文逗号分隔。
     * @example `tag1,tag2`
     */
    "Tags": string;
}
