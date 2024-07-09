export interface DescribeAttachRecordsRequest {
    /**
     * 应用分组ID。
     * @example `64b8b994563c306b4fed****`
     */
    "ApplicationId": string;
    /**
     * 待查询的服务器UUID列表，最多支持设置20个UUID。
     */
    "EcsUUIDList"?: string[];
}
