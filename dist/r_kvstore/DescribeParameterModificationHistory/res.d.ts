// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.HistoricalParameter
export interface HistoricalParameter {
	ParameterName: string;
	ModifyTime: string;
	OldParameterValue: string;
	NewParameterValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.HistoricalParameters
export interface HistoricalParameters {
	HistoricalParameter: HistoricalParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeParameterModificationHistoryResponse
export interface DescribeParameterModificationHistoryResponse {
	RequestId: string;
	HistoricalParameters: HistoricalParameters;
}

