// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.IpControlInfo
export interface IpControlInfo {
	IpControlId: string;
	IpControlName: string;
	IpControlType: string;
	Description: string;
	CreateTime: string;
	ModifiedTime: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.IpControlInfos
export interface IpControlInfos {
	IpControlInfo: IpControlInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeIpControlsResponse
export interface DescribeIpControlsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	IpControlInfos: IpControlInfos;
}

