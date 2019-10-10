// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.VulWhitelist
export interface VulWhitelist {
	Name: string;
	Type: string;
	AliasName: string;
	Reason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeVulWhitelistResponse
export interface DescribeVulWhitelistResponse {
	RequestId: string;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	VulWhitelists: VulWhitelist[];
}

