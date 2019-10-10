// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.Endpoints
export interface Endpoints {
	TcpEndpoint: string;
	HttpInternetEndpoint: string;
	HttpInternetSecureEndpoint: string;
	HttpInternalEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.InstanceBaseInfo
export interface InstanceBaseInfo {
	InstanceId: string;
	InstanceStatus: number;
	ReleaseTime: number;
	InstanceType: number;
	InstanceName: string;
	IndependentNaming: boolean;
	Endpoints: Endpoints;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsInstanceBaseInfoResponse
export interface OnsInstanceBaseInfoResponse {
	RequestId: string;
	HelpUrl: string;
	InstanceBaseInfo: InstanceBaseInfo;
}

