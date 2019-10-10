// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.ReferList
export interface ReferList {
	ReferDetail: string;
	VisitData: string;
	VisitProportion: number;
	Flow: string;
	FlowProportion: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.TopReferList
export interface TopReferList {
	ReferList: ReferList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainTopReferVisitResponse
export interface DescribeScdnDomainTopReferVisitResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	TopReferList: TopReferList;
}

