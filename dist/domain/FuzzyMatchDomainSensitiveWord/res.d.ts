// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.MatchedSensitiveWord
export interface MatchedSensitiveWord {
	Word: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.MatchedSentiveWordsInFuzzyMatchDomainSensitiveWord
export interface MatchedSentiveWordsInFuzzyMatchDomainSensitiveWord {
	MatchedSensitiveWord: MatchedSensitiveWord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.FuzzyMatchDomainSensitiveWordResponse
export interface FuzzyMatchDomainSensitiveWordResponse {
	RequestId: string;
	Keyword: string;
	Exist: boolean;
	MatchedSentiveWords: MatchedSentiveWordsInFuzzyMatchDomainSensitiveWord;
}

