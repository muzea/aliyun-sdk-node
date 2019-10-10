// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HandScoreIdList
export interface HandScoreIdList {
	HandScoreIdList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Agent
export interface Agent {
	Name: string;
	AgentName: string;
	AgentId: string;
	SkillGroup: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Recording
export interface Recording {
	Id: string;
	PrimaryId: string;
	CallId: string;
	Name: string;
	Url: string;
	DataSetName: string;
	Duration: number;
	Caller: string;
	Callee: string;
	CallTime: string;
	CallType: number;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitInUploadDataSync
export interface HitInUploadDataSync {
	ConditionHitInfo: ConditionHitInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Range
export interface Range {
	To: number;
	From: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Anchor
export interface Anchor {
	Cid: string;
	HitTime: number;
	Location: string;
	AnchorCid: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.CheckRange
export interface CheckRange {
	Role: string;
	RoleId: number;
	Absolute: boolean;
	Range: Range;
	Anchor: Anchor;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OperKeyWordsInGetRuleDetail
export interface OperKeyWordsInGetRuleDetail {
	OperKeyWord: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ReferencesInGetRuleDetail
export interface ReferencesInGetRuleDetail {
	Reference: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.KeywordsInConfigDataSet
export interface KeywordsInConfigDataSet {
	Keywords: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Param
export interface Param {
	Regex: string;
	Target: number;
	InSentence: boolean;
	DifferentRole: boolean;
	Interval: number;
	FromEnd: boolean;
	TargetRole: string;
	Threshold: number;
	Phrase: string;
	OperKeyWords: OperKeyWordsInGetRuleDetail;
	References: ReferencesInGetRuleDetail;
	Keywords: KeywordsInConfigDataSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OperatorBasicInfo
export interface OperatorBasicInfo {
	Name: string;
	Oid: string;
	OperName: string;
	Type: string;
	Param: Param;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OperatorsInUploadDataSync
export interface OperatorsInUploadDataSync {
	OperatorBasicInfo: OperatorBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionBasicInfo
export interface ConditionBasicInfo {
	Cid: string;
	ConditionInfoCid: string;
	Lambda: string;
	OperLambda: string;
	CheckRange: CheckRange;
	Operators: OperatorsInUploadDataSync;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionInfo
export interface ConditionInfo {
	ConditionBasicInfo: ConditionBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleHitInfo
export interface RuleHitInfo {
	HitStatus: number;
	Rid: string;
	Hit: HitInUploadDataSync;
	ConditionInfo: ConditionInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RulesInUploadDataSync
export interface RulesInUploadDataSync {
	RuleHitInfo: RuleHitInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.AsrResultItem
export interface AsrResultItem {
	Role: string;
	Words: string;
	Begin: number;
	End: number;
	EmotionValue: number;
	SilenceDuration: number;
	SpeechRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.AsrResultInGetResult
export interface AsrResultInGetResult {
	AsrResult: AsrResultItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.CidInGetResult
export interface CidInGetResult {
	Cid: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.PhraseInGetResult
export interface PhraseInGetResult {
	Role: string;
	Words: string;
	Begin: number;
	End: number;
	EmotionValue: number;
	SilenceDuration: number;
	SpeechRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.KeyWordsInGetResult
export interface KeyWordsInGetResult {
	KeyWord: KeyWord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Hit
export interface Hit {
	Cid: CidInGetResult;
	Phrase: PhraseInGetResult;
	KeyWords: KeyWordsInGetResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Hits
export interface Hits {
	Hit: Hit[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitResultItem
export interface HitResultItem {
	Rid: string;
	Name: string;
	Type: string;
	ReviewResult: number;
	Hits: Hits;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitResult
export interface HitResult {
	HitResult: HitResultItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ResultInfo
export interface ResultInfo {
	Comments: string;
	Status: number;
	RuleName: string;
	HitId: string;
	ErrorMessage: string;
	ReviewStatus: number;
	CreateTime: string;
	AsrMsg: string;
	ReviewResult: number;
	Tid: string;
	Resolver: string;
	TaskId: string;
	Rid: number;
	TaskName: string;
	Reviewer: string;
	Score: number;
	HandScoreIdList: HandScoreIdList;
	Agent: Agent;
	Recording: Recording;
	Rules: RulesInUploadDataSync;
	AsrResult: AsrResultInGetResult;
	HitResult: HitResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInUploadDataSync
export interface DataInUploadDataSync {
	ResultInfo: ResultInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.UploadDataSyncResponse
export interface UploadDataSyncResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Count: number;
	Data: DataInUploadDataSync;
}

