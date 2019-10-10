// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.ChildInstance
export interface ChildInstance {
	CenId: string;
	ChildInstanceId: string;
	ChildInstanceType: string;
	ChildInstanceRegionId: string;
	ChildInstanceOwnerId: number;
	Status: string;
	ChildInstanceAttachTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.ChildInstances
export interface ChildInstances {
	ChildInstance: ChildInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenAttachedChildInstancesResponse
export interface DescribeCenAttachedChildInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ChildInstances: ChildInstances;
}

