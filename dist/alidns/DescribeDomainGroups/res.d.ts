// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DomainGroup
export interface DomainGroup {
	GroupId: string;
	GroupName: string;
	DomainCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DomainGroups
export interface DomainGroups {
	DomainGroup: DomainGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDomainGroupsResponse
export interface DescribeDomainGroupsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DomainGroups: DomainGroups;
}

