// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ReferList
export interface ReferList {
	ReferDetail: string;
	VisitData: string;
	VisitProportion: number;
	Flow: string;
	FlowProportion: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.TopReferList
export interface TopReferList {
	ReferList: ReferList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainTopReferVisitResponse
export interface DescribeDcdnDomainTopReferVisitResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	TopReferList: TopReferList;
}

