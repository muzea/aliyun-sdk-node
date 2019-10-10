// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UrlList
export interface UrlList {
	Flow: string;
	VisitData: string;
	UrlDetail: string;
	FlowProportion: number;
	VisitProportion: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.AllUrlList
export interface AllUrlList {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Url200List
export interface Url200List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Url300List
export interface Url300List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Url400List
export interface Url400List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Url500List
export interface Url500List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainTopUrlVisitResponse
export interface DescribeDomainTopUrlVisitResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	AllUrlList: AllUrlList;
	Url200List: Url200List;
	Url300List: Url300List;
	Url400List: Url400List;
	Url500List: Url500List;
}

