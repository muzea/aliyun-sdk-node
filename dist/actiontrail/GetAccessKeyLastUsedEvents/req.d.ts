export interface GetAccessKeyLastUsedEventsRequest {
    /**
     * AccessKey ID。
     * @example `LTAI4Fz1ykT4qxgNMvN6****`
     */
    "AccessKey": string;
    /**
     * 阿里云服务。关于云服务，请参见[支持的云服务](~~28829~~)。
     * @example `Ecs`
     */
    "ServiceName": string;
    /**
     * 用于请求下一页检索的结果。
     * > 请求参数必须保证和上次请求一致。
     * @example `eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****`
     */
    "NextToken"?: string;
    /**
     * 允许返回的最大结果数目。
     * 取值范围：0～100。
     * 默认值：20。
     * @example `20`
     */
    "PageSize"?: string;
}
