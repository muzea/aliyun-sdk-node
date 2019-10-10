// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DomainGroup
export interface DomainGroup {
	DomainGroupId: string;
	DomainGroupName: string;
	TotalNumber: number;
	CreationDate: string;
	ModificationDate: string;
	DomainGroupStatus: string;
	BeingDeleted: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryDomainGroupList
export interface DataInQueryDomainGroupList {
	DomainGroup: DomainGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDomainGroupListResponse
export interface QueryDomainGroupListResponse {
	RequestId: string;
	Data: DataInQueryDomainGroupList;
}

