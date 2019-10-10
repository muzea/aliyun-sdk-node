// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.HistoricalParameter
export interface HistoricalParameter {
	ParameterName: string;
	ModifyTime: string;
	OldParameterValue: string;
	NewParameterValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.HistoricalParameters
export interface HistoricalParameters {
	HistoricalParameter: HistoricalParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeParameterModificationHistoryResponse
export interface DescribeParameterModificationHistoryResponse {
	RequestId: string;
	HistoricalParameters: HistoricalParameters;
}

