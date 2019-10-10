// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SystemParamItem
export interface SystemParamItem {
	ParamName: string;
	ParamType: string;
	DemoValue: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SystemParams
export interface SystemParams {
	SystemParamItem: SystemParamItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeSystemParametersResponse
export interface DescribeSystemParametersResponse {
	RequestId: string;
	SystemParams: SystemParams;
}

