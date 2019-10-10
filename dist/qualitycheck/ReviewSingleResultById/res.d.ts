// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ManualScoreMappingListInReviewSingleResultById
export interface ManualScoreMappingListInReviewSingleResultById {
	ManualScoreMappingList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DialogueInReviewSingleResultById
export interface DialogueInReviewSingleResultById {
	Begin: number;
	BeginTime: number;
	EmotionValue: number;
	End: number;
	HourMinSec: string;
	Identity: string;
	Role: string;
	SilenceDuration: number;
	SpeechRate: number;
	Words: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DialoguesInReviewSingleResultById
export interface DialoguesInReviewSingleResultById {
	Dialogue: DialogueInReviewSingleResultById[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ScoreParam
export interface ScoreParam {
	Hit: number;
	ScoreSubId: number;
	ScoreSubName: string;
	ScoreNum: number;
	ScoreType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ScoreInfosInGetNextResultToReview
export interface ScoreInfosInGetNextResultToReview {
	ScoreParam: ScoreParam[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ScorePo
export interface ScorePo {
	ScoreId: number;
	ScoreName: string;
	ScoreInfos: ScoreInfosInGetNextResultToReview;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HandScoreInfoListInReviewSingleResultById
export interface HandScoreInfoListInReviewSingleResultById {
	ScorePo: ScorePo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ReviewInfo
export interface ReviewInfo {
	ReviewTime: string;
	Rid: number;
	HitId: string;
	Reviewer: string;
	ReviewResult: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.CidInTestRule
export interface CidInTestRule {
	cid: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitCids
export interface HitCids {
	CidItem: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Phrase
export interface Phrase {
	End: number;
	Words: string;
	HourMinSec: string;
	Identity: string;
	Role: string;
	Pid: number;
	BeginTime: string;
	EmotionValue: number;
	Begin: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitKeyWord
export interface HitKeyWord {
	Val: string;
	Pid: number;
	From: number;
	To: number;
	Tid: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitKeyWords
export interface HitKeyWords {
	HitKeyWord: HitKeyWord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.KeyWord
export interface KeyWord {
	Cid: string;
	To: number;
	Val: string;
	Pid: number;
	From: number;
	Tid: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.KeyWordsInGetNextResultToReview
export interface KeyWordsInGetNextResultToReview {
	KeyWord: KeyWord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionHitInfo
export interface ConditionHitInfo {
	Cid: CidInTestRule;
	HitCids: HitCids;
	Phrase: Phrase;
	HitKeyWords: HitKeyWords;
	KeyWords: KeyWordsInGetNextResultToReview;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionHitInfoListInGetNextResultToReview
export interface ConditionHitInfoListInGetNextResultToReview {
	ConditionHitInfo: ConditionHitInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitRuleReviewInfo
export interface HitRuleReviewInfo {
	Comments: string;
	AutoReview: number;
	RuleName: string;
	RuleType: number;
	ScoreSubId: number;
	ScoreId: number;
	Rid: number;
	TotalNumber: number;
	RuleScoreType: number;
	ReviewInfo: ReviewInfo;
	ConditionHitInfoList: ConditionHitInfoListInGetNextResultToReview;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitRuleReviewInfoListInReviewSingleResultById
export interface HitRuleReviewInfoListInReviewSingleResultById {
	HitRuleReviewInfo: HitRuleReviewInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInReviewSingleResultById
export interface DataInReviewSingleResultById {
	AsrWordsCount: number;
	Audio: boolean;
	AudioURL: string;
	BusinessType: number;
	Deleted: boolean;
	FileMergeName: string;
	HitNumber: number;
	IsAudio: boolean;
	IsDeleted: boolean;
	NextVid: string;
	PreVid: string;
	ReviewNumber: number;
	TotalScore: number;
	Vid: number;
	ManualScoreMappingList: ManualScoreMappingListInReviewSingleResultById;
	Dialogues: DialoguesInReviewSingleResultById;
	HandScoreInfoList: HandScoreInfoListInReviewSingleResultById;
	HitRuleReviewInfoList: HitRuleReviewInfoListInReviewSingleResultById;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ReviewSingleResultByIdResponse
export interface ReviewSingleResultByIdResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInReviewSingleResultById;
}

