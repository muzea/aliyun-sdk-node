// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.NotificationTypesInDescribeNotificationConfigurations
export interface NotificationTypesInDescribeNotificationConfigurations {
	NotificationType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.NotificationConfigurationModel
export interface NotificationConfigurationModel {
	ScalingGroupId: string;
	NotificationArn: string;
	NotificationTypes: NotificationTypesInDescribeNotificationConfigurations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.NotificationConfigurationModels
export interface NotificationConfigurationModels {
	NotificationConfigurationModel: NotificationConfigurationModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeNotificationConfigurationsResponse
export interface DescribeNotificationConfigurationsResponse {
	RequestId: string;
	NotificationConfigurationModels: NotificationConfigurationModels;
}

