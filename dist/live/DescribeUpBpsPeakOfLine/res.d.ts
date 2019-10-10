// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpBpsPeakOfLine
export interface DescribeUpBpsPeakOfLine {
	BandWidth: number;
	PeakTime: string;
	QueryTime: string;
	StatName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpBpsPeakOfLines
export interface DescribeUpBpsPeakOfLines {
	DescribeUpBpsPeakOfLine: DescribeUpBpsPeakOfLine[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpBpsPeakOfLineResponse
export interface DescribeUpBpsPeakOfLineResponse {
	RequestId: string;
	DescribeUpBpsPeakOfLines: DescribeUpBpsPeakOfLines;
}

