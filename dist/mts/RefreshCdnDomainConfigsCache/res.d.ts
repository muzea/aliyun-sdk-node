// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SucessDomains
export interface SucessDomains {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FailedDomains
export interface FailedDomains {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.RefreshCdnDomainConfigsCacheResponse
export interface RefreshCdnDomainConfigsCacheResponse {
	RequestId: string;
	SucessDomains: SucessDomains;
	FailedDomains: FailedDomains;
}

