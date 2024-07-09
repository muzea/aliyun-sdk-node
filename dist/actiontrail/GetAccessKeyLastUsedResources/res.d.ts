export interface GetAccessKeyLastUsedResourcesResponse {
    /**
     * 请求ID。
     * @example `145318BE-DEE1-4C57-AA7C-5BE7D34A6AE0`
     */
    RequestId: string;
    /**
     * 检索到的资源列表。
     */
    Resources: {
        /**
         * 使用该资源的时间戳。
         * 单位：毫秒。
         * @example `1657247532000`
         */
        UsedTimestamp: number;
        /**
         * 事件详情。
         * @example `{
          "eventId": "239EB588-CD24-522E-B0B5-174A1A58****",
          "eventVersion": 1,
          "eventSource": "ecs.cn-hangzhou.aliyuncs.com",
          "sourceIpAddress": "10.10.**.**",
          "eventType": "ApiCall",
          "userIdentity": {
            "accountId": "104758519118****",
            "principalId": "24549429003625****",
            "type": "ram-user",
            "userName": "alice"
          },
          "serviceName": "Ecs",
          "apiVersion": "2016-01-20",
          "requestId": "239EB588-CD24-522E-B0B5-174A1A588BE0",
          "eventTime": "2021-08-05T09:21:32Z",
          "isGlobal": false,
          "acsRegion": "cn-hangzhou",
          "eventName": "DescribeInstances"
        }`
         */
        Detail: string;
        /**
         * 资源名称。
         * @example `i-bp1ltva99x1a****`
         */
        ResourceName: string;
        /**
         * 资源类型。
         * @example `ACS::ECS::Instance`
         */
        ResourceType: string;
        /**
         * 最后使用记录来源。
         * @example `ManagementEvent`
         */
        Source: string;
    }[];
    /**
     * 用于请求下一页检索的结果。
     * @example `eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****`
     */
    NextToken: string;
}
