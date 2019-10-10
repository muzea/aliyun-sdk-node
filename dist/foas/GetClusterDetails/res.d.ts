// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Details
export interface Details {
	ClusterId: string;
	RegionId: string;
	ZoneId: string;
	State: string;
	Description: string;
	DisplayName: string;
	OwnerId: string;
	Operator: string;
	StorageType: string;
	GmtCreate: number;
	GmtModified: number;
	UserOssInfo: string;
	UserVpcId: string;
	UserSGId: string;
	UserVSwitchList: string;
	IsMixDeploy: boolean;
	InstanceInfos: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetClusterDetailsResponse
export interface GetClusterDetailsResponse {
	RequestId: string;
	Details: Details;
}

