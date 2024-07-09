export interface ModifyAssetGroupRequest {
    /**
     * 访问源的IP地址。
     * @example `10.12.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 修改后服务器的分组ID。
     * > 您可调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取服务器的分组ID。
     * @example `9586199`
     */
    "GroupId": number;
    /**
     * 要修改分组的服务器的UUID。多个UUID使用半角逗号（,）分隔。
     * > 您可调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `076a446d-df7d-424c-bdc5-bb5dc7f1****`
     */
    "Uuids": string;
}
