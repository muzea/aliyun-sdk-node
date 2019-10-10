// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveDomainModel
export interface LiveDomainModel {
	DomainName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveDomainModels
export interface LiveDomainModels {
	LiveDomainModel: LiveDomainModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainMappingResponse
export interface DescribeLiveDomainMappingResponse {
	RequestId: string;
	LiveDomainModels: LiveDomainModels;
}

