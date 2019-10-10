// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceIds
export interface InstanceIds {
	InstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DeploymentSet
export interface DeploymentSet {
	DeploymentSetId: string;
	DeploymentSetDescription: string;
	DeploymentSetName: string;
	Strategy: string;
	DeploymentStrategy: string;
	Domain: string;
	Granularity: string;
	InstanceAmount: number;
	CreationTime: string;
	InstanceIds: InstanceIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DeploymentSets
export interface DeploymentSets {
	DeploymentSet: DeploymentSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDeploymentSetsResponse
export interface DescribeDeploymentSetsResponse {
	RequestId: string;
	RegionId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DeploymentSets: DeploymentSets;
}

