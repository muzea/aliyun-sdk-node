export interface UpdateUpstreamAppServerRequest {
    /**
     * 服务端应用ID。
     * @example `1`
     */
    "Id": number;
    /**
     * 服务端应用名称。
     * @example `upstreamTest`
     */
    "Name"?: string;
    /**
     * 上行消息业务tag，多个tag通过英文逗号拼接。
     * @example `tag1,tag2`
     */
    "Tags"?: string;
    /**
     * iovcc项目工程ID。
     * @example `ewtwtt4f`
     */
    "ProjectId"?: string;
}
