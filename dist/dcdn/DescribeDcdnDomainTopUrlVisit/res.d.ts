// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.UrlList
export interface UrlList {
	Flow: string;
	VisitData: string;
	UrlDetail: string;
	FlowProportion: number;
	VisitProportion: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.AllUrlList
export interface AllUrlList {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Url200List
export interface Url200List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Url300List
export interface Url300List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Url400List
export interface Url400List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Url500List
export interface Url500List {
	UrlList: UrlList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainTopUrlVisitResponse
export interface DescribeDcdnDomainTopUrlVisitResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	AllUrlList: AllUrlList;
	Url200List: Url200List;
	Url300List: Url300List;
	Url400List: Url400List;
	Url500List: Url500List;
}

