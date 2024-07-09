export interface ListApplicationGroupsResponse {
    /**
     * 翻页标记的Token。
     * @example `-`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `69D97BF2-5DF2-544C-A650-36A474E17BC3`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 应用分组信息。
     */
    ApplicationGroups: {
        /**
         * 云监控分组ID。
         * @example `12345678`
         */
        CmsGroupId: string;
        /**
         * 部署地域ID（即资源所在地域ID）。
         * @example `cn-hangzhou`
         */
        DeployRegionId: string;
        /**
         * 更新时间。
         * @example `2021-09-08T03:01:53Z`
         */
        UpdateDate: string;
        /**
         * 应用分组描述。
         * @example `ApplicationGroup`
         */
        Description: string;
        /**
         * 标签键。
         * @example `k1`
         */
        ImportTagKey: string;
        /**
         * 应用名称。
         * @example `MyApplication`
         */
        ApplicationName: string;
        /**
         * 标签值。
         * @example `v1`
         */
        ImportTagValue: string;
        /**
         * 应用分组名称。
         * @example `UpdateMyApplicationGroup`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `2021-09-07T10:28:25Z`
         */
        CreateDate: string;
        /**
         * 应用分组状态。
         * @example `Created`
         */
        Status: string;
        /**
         * 应用分组的配置信息。
         * @example `{   "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",   "Parameters": {     "ZoneId": "cn-hangzhou-k",     "ProjectName": "test",     "SystemDiskSize": 40,     "InstanceChargeType": "PostPaid",     "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",     "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",     "SystemDiskCategory": "cloud_essd",     "InstancePassword": "******",     "InternetChargeType": "PayByTraffic",     "InstanceCount": 1,     "InternetMaxBandwidthOut": 0,     "VpcId": "vpc-bp1i99boyas8i8m9t3skp",     "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",     "DataDiskSize": 100,     "EcsInstanceType": "ecs.s6-c1m4.small",     "DataDiskCategory": "cloud_efficiency",     "EnvironmentCommandId": "c-hz028fc3g031gcg"   },   "RegionId": "cn-hangzhou",   "StackName": "stack-1645688523068-3no_AKhOJ",   "DisableRollback": true }`
         */
        DeployParameters: string;
        /**
         * 应用分组状态详情。
         * @example `ApplicationGroup is Created.`
         */
        StatusReason: string;
    }[];
}
