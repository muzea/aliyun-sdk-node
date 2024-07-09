export interface GetApplicationGroupResponse {
    /**
     * 请求ID。
     * @example `92EA60ED-544D-55E9-93D9-237BE9976C0D`
     */
    RequestId: string;
    /**
     * 应用分组详细信息。
     */
    ApplicationGroup: {
        /**
         * 云监控分组ID。
         * @example `12345678`
         */
        CmsGroupId: string;
        /**
         * 部署地域ID。
         * @example `cn-hangzhou`
         */
        DeployRegionId: string;
        /**
         * 应用分组描述信息。
         * @example `ApplicationGroup`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-07T10:28:25Z`
         */
        UpdateDate: string;
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
         * @example `MyApplicationGroup`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `2021-09-07T10:28:25Z`
         */
        CreateDate: string;
        /**
         * 应用分组配置信息。
         * @example `{       "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",       "Parameters": {         "ZoneId": "cn-hangzhou-k",         "ProjectName": "test",         "SystemDiskSize": 40,         "InstanceChargeType": "PostPaid",         "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",         "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",         "SystemDiskCategory": "cloud_essd",         "InstancePassword": "******",         "InternetChargeType": "PayByTraffic",         "InstanceCount": 1,         "InternetMaxBandwidthOut": 0,         "VpcId": "vpc-bp1i99boyas8i8m9t3skp",         "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",         "DataDiskSize": 100,         "EcsInstanceType": "ecs.s6-c1m4.small",         "DataDiskCategory": "cloud_efficiency",         "EnvironmentCommandId": "c-hz028fc3g031gcg"       }`
         */
        DeployParameters: string;
        /**
         * 应用分组状态。
         * @example `Created`
         */
        Status: string;
        /**
         * 应用分组状态详情。
         * @example `Stack CREATE completed successfully`
         */
        StatusReason: string;
        /**
         * 部署结果输出。
         * @example `{       "Outputs": [         {           "Description": "No description given",           "OutputKey": "InstanceIds"         }       ],       "StackId": "6ef4b860-f6e7-4145-8d22-f4a2a32363e1"     }   }`
         */
        DeployOutputs: string;
        /**
         * 应用实例创建进度。
         * @example `100`
         */
        Progress: string;
    };
}
