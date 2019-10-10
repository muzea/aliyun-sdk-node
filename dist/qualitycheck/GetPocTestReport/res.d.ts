// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetPocTestReport
export interface DataInGetPocTestReport {
	AsrAccuracyRate: string;
	LabelNum: number;
	Poc: boolean;
	AudioBit: string;
	AudioNum: number;
	AudioSampleRate: string;
	AudioTrack: string;
	CharacterNum: number;
	CheckCost: string;
	ModelName: string;
	PocTime: string;
	RuleInfo: string;
	RuleNum: number;
	RuleRealRate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetPocTestReportResponse
export interface GetPocTestReportResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetPocTestReport;
}

