// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.MatchedSensitiveWord
export interface MatchedSensitiveWord {
	Word: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.MatchedSentiveWordsInBatchFuzzyMatchDomainSensitiveWord
export interface MatchedSentiveWordsInBatchFuzzyMatchDomainSensitiveWord {
	MatchedSensitiveWord: MatchedSensitiveWord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.SensitiveWordMatchResult
export interface SensitiveWordMatchResult {
	Keyword: string;
	Exist: boolean;
	MatchedSentiveWords: MatchedSentiveWordsInBatchFuzzyMatchDomainSensitiveWord;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.SensitiveWordMatchResultList
export interface SensitiveWordMatchResultList {
	SensitiveWordMatchResult: SensitiveWordMatchResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.BatchFuzzyMatchDomainSensitiveWordResponse
export interface BatchFuzzyMatchDomainSensitiveWordResponse {
	RequestId: string;
	SensitiveWordMatchResultList: SensitiveWordMatchResultList;
}

