// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.ApplicationGroup
export interface ApplicationGroup {
	GroupId: string;
	GroupName: string;
	GroupType: number;
	PackageType: string;
	PackageVersion: string;
	ImageUrl: string;
	PackageUrl: string;
	Jdk: string;
	WebContainer: string;
	EdasContainerVersion: string;
	Replicas: number;
	RunningInstances: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DescribeApplicationGroupsResponse
export interface DescribeApplicationGroupsResponse {
	Code: string;
	Message: string;
	TraceId: string;
	RequestId: string;
	Success: boolean;
	ErrorCode: string;
	Data: ApplicationGroup[];
}

