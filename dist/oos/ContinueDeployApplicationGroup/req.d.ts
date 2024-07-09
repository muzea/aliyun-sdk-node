export interface ContinueDeployApplicationGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "ApplicationName": string;
    /**
     * 应用分组部署配置信息。
     * @example `{       "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",       "Parameters": {         "ZoneId": "cn-hangzhou-k",         "ProjectName": "test",         "SystemDiskSize": 40,         "InstanceChargeType": "PostPaid",         "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",         "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",         "SystemDiskCategory": "cloud_essd",         "InstancePassword": "******",         "InternetChargeType": "PayByTraffic",         "InstanceCount": 1,         "InternetMaxBandwidthOut": 0,         "VpcId": "vpc-bp1i99boyas8i8m9t3skp",         "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",         "DataDiskSize": 100,         "EcsInstanceType": "ecs.s6-c1m4.small",         "DataDiskCategory": "cloud_efficiency",         "EnvironmentCommandId": "c-hz028fc3g031gcg"       }`
     */
    "DeployParameters": string;
    /**
     * 应用分组名称。
     * @example `MyApplicationGroup`
     */
    "Name": string;
}
