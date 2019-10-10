// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveVServerGroup
export interface MasterSlaveVServerGroup {
	MasterSlaveVServerGroupId: string;
	MasterSlaveVServerGroupName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.MasterSlaveVServerGroups
export interface MasterSlaveVServerGroups {
	MasterSlaveVServerGroup: MasterSlaveVServerGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeMasterSlaveVServerGroupsResponse
export interface DescribeMasterSlaveVServerGroupsResponse {
	RequestId: string;
	MasterSlaveVServerGroups: MasterSlaveVServerGroups;
}

