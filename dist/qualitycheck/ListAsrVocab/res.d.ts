// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.AsrVocab
export interface AsrVocab {
	Id: string;
	Name: string;
	CreateTime: string;
	UpdateTime: string;
	VocabularyId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListAsrVocab
export interface DataInListAsrVocab {
	AsrVocab: AsrVocab[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListAsrVocabResponse
export interface ListAsrVocabResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInListAsrVocab;
}

