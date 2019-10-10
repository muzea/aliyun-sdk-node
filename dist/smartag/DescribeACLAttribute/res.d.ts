// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Acr
export interface Acr {
	AcrId: string;
	Description: string;
	Direction: string;
	SourceCidr: string;
	DestCidr: string;
	IpProtocol: string;
	SourcePortRange: string;
	DestPortRange: string;
	Policy: string;
	Priority: number;
	GmtCreate: number;
	AclId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Acrs
export interface Acrs {
	Acr: Acr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeACLAttributeResponse
export interface DescribeACLAttributeResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Acrs: Acrs;
}

