// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.EcsSecurityGroupRelation
export interface EcsSecurityGroupRelation {
	RegionId: string;
	SecurityGroupId: string;
	NetworkType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeSecurityGroupConfiguration
export interface ItemsInDescribeSecurityGroupConfiguration {
	EcsSecurityGroupRelation: EcsSecurityGroupRelation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeSecurityGroupConfigurationResponse
export interface DescribeSecurityGroupConfigurationResponse {
	RequestId: string;
	DBInstanceName: string;
	Items: ItemsInDescribeSecurityGroupConfiguration;
}

