// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.EcsSecurityGroupRelation
export interface EcsSecurityGroupRelation {
	RegionId: string;
	SecurityGroupId: string;
	NetworkType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInModifySecurityGroupConfiguration
export interface ItemsInModifySecurityGroupConfiguration {
	EcsSecurityGroupRelation: EcsSecurityGroupRelation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ModifySecurityGroupConfigurationResponse
export interface ModifySecurityGroupConfigurationResponse {
	RequestId: string;
	DBInstanceName: string;
	Items: ItemsInModifySecurityGroupConfiguration;
}

