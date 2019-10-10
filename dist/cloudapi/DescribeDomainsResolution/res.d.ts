// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DomainResolution
export interface DomainResolution {
	DomainName: string;
	DomainResolutionStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DomainResolutions
export interface DomainResolutions {
	DomainResolution: DomainResolution[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeDomainsResolutionResponse
export interface DescribeDomainsResolutionResponse {
	RequestId: string;
	GroupId: string;
	DomainResolutions: DomainResolutions;
}

