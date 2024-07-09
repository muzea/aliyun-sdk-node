export interface DescribeCloudAssistantSettingsRequest {
    /**
     * 待查询的服务配置列表。
     */
    "SettingType": string[];
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
