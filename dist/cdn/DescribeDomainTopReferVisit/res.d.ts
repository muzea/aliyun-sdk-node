// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ReferList
export interface ReferList {
	ReferDetail: string;
	VisitData: string;
	VisitProportion: number;
	Flow: string;
	FlowProportion: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.TopReferList
export interface TopReferList {
	ReferList: ReferList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainTopReferVisitResponse
export interface DescribeDomainTopReferVisitResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	TopReferList: TopReferList;
}

