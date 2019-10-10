// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.RecordLine
export interface RecordLine {
	LineDisplayName: string;
	LineCode: string;
	LineName: string;
	FatherCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.RecordLinesInDescribeSupportLines
export interface RecordLinesInDescribeSupportLines {
	RecordLine: RecordLine[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeSupportLinesResponse
export interface DescribeSupportLinesResponse {
	RequestId: string;
	RecordLines: RecordLinesInDescribeSupportLines;
}

