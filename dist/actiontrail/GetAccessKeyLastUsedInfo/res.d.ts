export interface GetAccessKeyLastUsedInfoResponse {
    /**
     * 请求ID。
     * @example `239EB588-CD24-522E-B0B5-174A1A588BE0`
     */
    RequestId: string;
    /**
     * AccessKey ID。
     * @example `LTAI4Fz1ykT4qxgNMvN6****
    `
     */
    AccessKeyId: string;
    /**
     * 阿里云账号ID。
     * @example `104758519118****`
     */
    AccountId: string;
    /**
     * AccessKey所属账号ID。
     * @example `24549429003625****`
     */
    OwnerId: string;
    /**
     * AccessKey所属账号名称。
     * 如果AccountType为root-account，则userName记录为“root”；如果AccountType为ram-user，则userName记录为RAM用户名。
     * @example `alice`
     */
    UserName: string;
    /**
     * AccessKey所属账号身份类型。
     * @example `ram-user`
     */
    AccountType: string;
    /**
     * 最后使用时间戳。
     * @example `1657247532000`
     */
    UsedTimestamp: number;
    /**
     * 最后使用事件详情。
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
     * 最后使用记录来源。
     * @example `ManagementEvent`
     */
    Source: string;
    /**
     * 最后使用的云服务。
     * @example `Ecs`
     */
    ServiceName: string;
    /**
     * 最后使用的云服务中文名称。
     * @example `云服务器ECS`
     */
    ServiceNameCn: string;
    /**
     * 最后使用的云服务英文名称。
     * @example `Elastic Compute Service`
     */
    ServiceNameEn: string;
}
