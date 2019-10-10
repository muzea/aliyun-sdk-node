// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.LineInGetNextResultToVerify
export interface LineInGetNextResultToVerify {
	Line: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Source
export interface Source {
	Position: number;
	Line: LineInGetNextResultToVerify;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Target
export interface Target {
	Position: number;
	Line: LineInGetNextResultToVerify;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Delta
export interface Delta {
	Type: string;
	Source: Source;
	Target: Target;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInVerifySentence
export interface DataInVerifySentence {
	Delta: Delta[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.VerifySentenceResponse
export interface VerifySentenceResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	SourceRole: number;
	TargetRole: number;
	IncorrectWords: number;
	Data: DataInVerifySentence;
}

