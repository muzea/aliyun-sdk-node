export interface InstallCloudAssistantRequest {
    /**
     * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID列表。列表元素数量为1~50。
     * @example `i-bp1iudwa5b1tqa****`
     */
    "InstanceId": string[];
}
