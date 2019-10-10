// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HiddenMenuItems
export interface HiddenMenuItems {
	HiddenMenuItems: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ManualScoreMappingListInGetNextResultToReview
export interface ManualScoreMappingListInGetNextResultToReview {
	ManualScoreMappingList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.BusinessCategoryNameList
export interface BusinessCategoryNameList {
	BusinessCategoryNameList: string[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ConditionsInConfigDataSet
export interface ConditionsInConfigDataSet {
	ConditionBasicInfo: ConditionBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Triggers
export interface Triggers {
	Trigger: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.BusinessCategoryBasicInfo
export interface BusinessCategoryBasicInfo {
	BusinessName: string;
	Bid: number;
	ServiceType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.BusinessCategories
export interface BusinessCategories {
	BusinessCategoryBasicInfo: BusinessCategoryBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleBasicInfo
export interface RuleBasicInfo {
	Name: string;
	Rid: string;
	Lambda: string;
	ExternalProperty: number;
	RuleLambda: string;
	Triggers: Triggers;
	BusinessCategories: BusinessCategories;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RulesInConfigDataSet
export interface RulesInConfigDataSet {
	RuleBasicInfo: RuleBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleInfo
export interface RuleInfo {
	Name: string;
	Comments: string;
	Status: number;
	AutoReview: number;
	CreateEmpid: string;
	CreateTime: string;
	LastUpdateTime: string;
	Rid: string;
	IsOnline: number;
	ScoreSubName: string;
	StartTime: string;
	ScoreName: string;
	EndTime: string;
	RuleLambda: string;
	Weight: string;
	LastUpdateEmpid: string;
	RuleScoreType: number;
	Type: number;
	IsDelete: number;
	BusinessCategoryNameList: BusinessCategoryNameList;
	Conditions: ConditionsInConfigDataSet;
	Rules: RulesInConfigDataSet;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitRuleReviewInfoListInTestRule
export interface HitRuleReviewInfoListInTestRule {
	HitRuleReviewInfo: HitRuleReviewInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleNameInfo
export interface RuleNameInfo {
	Rid: number;
	RuleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleListInGetSkillGroupConfig
export interface RuleListInGetSkillGroupConfig {
	RuleNameInfo: RuleNameInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ManualScoreInfoList
export interface ManualScoreInfoList {
	HitRuleReviewInfo: HitRuleReviewInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SentenceResult
export interface SentenceResult {
	BeginTime: number;
	Text: string;
	AgentId: string;
	ChannelId: number;
	SpeechRate: number;
	SpeakerId: string;
	ChannelKey: string;
	EndTime: number;
	IdentificationId: number;
	SilenceDuration: number;
	EmotionValue: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.CustomModelDialogues
export interface CustomModelDialogues {
	SentenceResult: SentenceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.OrdinaryModelDialogues
export interface OrdinaryModelDialogues {
	SentenceResult: SentenceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DiffContentPositionItem
export interface DiffContentPositionItem {
	OrdinaryModelfrom: number;
	OrdinaryModelto: number;
	OrdinaryModelKeyWord: string;
	CustomModelModelfrom: number;
	CustomModelModelto: number;
	CustomModellKeyWord: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DiffContentPosition
export interface DiffContentPosition {
	DiffContentPosition: DiffContentPositionItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DiffContentHighlightItem
export interface DiffContentHighlightItem {
	OrdinaryModelContent: string;
	CustomModelContent: string;
	IdentificationId: string;
	DiffContentPosition: DiffContentPosition;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DiffContentHighlight
export interface DiffContentHighlight {
	DiffContentHighlight: DiffContentHighlightItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DiffAsrContentInfo
export interface DiffAsrContentInfo {
	CustomModelDialogues: CustomModelDialogues;
	OrdinaryModelDialogues: OrdinaryModelDialogues;
	DiffContentHighlight: DiffContentHighlight;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DiffAsrContentInfoInGetAudioContentInfo
export interface DiffAsrContentInfoInGetAudioContentInfo {
	diffAsrContentInfo: DiffAsrContentInfo[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Deltas
export interface Deltas {
	Delta: Delta[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Dialogue
export interface Dialogue {
	End: number;
	HourMinSec: string;
	IncorrectWords: number;
	SourceRole: string;
	SilenceDuration: number;
	EmotionValue: number;
	Words: string;
	Identity: string;
	Role: string;
	SpeechRate: number;
	SourceWords: string;
	BeginTime: string;
	Begin: number;
	Deltas: Deltas;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DialoguesInGetNextResultToReview
export interface DialoguesInGetNextResultToReview {
	Dialogue: Dialogue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RulesInGetRule
export interface RulesInGetRule {
	RuleInfo: RuleInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ReviewHistory
export interface ReviewHistory {
	TimeStr: string;
	OperatorName: string;
	Type: number;
	ReviewResult: number;
	ComplainResult: number;
	OldScore: number;
	Score: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ReviewHistoryList
export interface ReviewHistoryList {
	ReviewHistory: ReviewHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RecognizeDialogue
export interface RecognizeDialogue {
	SentenceResult: SentenceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Precision
export interface Precision {
	Status: number;
	TaskId: string;
	ModelName: string;
	Precision: number;
	ModelId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.PrecisionsInGetPrecisionTask
export interface PrecisionsInGetPrecisionTask {
	Precision: Precision[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Word
export interface Word {
	Word: string;
	Weight: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Words
export interface Words {
	Word: Word[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HandScoreInfoListInGetNextResultToReview
export interface HandScoreInfoListInGetNextResultToReview {
	ScorePo: ScorePo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.Data
export interface Data {
	Vid: string;
	SetId: number;
	ModelName: string;
	BuName: string;
	AccountType: number;
	ChannelType: number;
	TaskAsrRequestId: number;
	AsrAccuracyRate: string;
	RoleName: string;
	CurrentStatus: number;
	TaskId: string;
	SkillGroupId: string;
	ReviewNumber: number;
	TotalCount: number;
	IsAudio: boolean;
	ModeCustomizationId: string;
	FileName: string;
	FileId: string;
	IncorrectWords: number;
	VerifiedCount: number;
	ModelStatus: number;
	HideNumber: number;
	IsCovertContext: boolean;
	Id: number;
	AliUid: string;
	Precision: number;
	ModelId: number;
	LoginUserType: number;
	Verified: boolean;
	NextVid: string;
	Rid: string;
	ScoreName: string;
	LabelNum: number;
	SubDir: string;
	IsDeleted: boolean;
	TaskAsrResqusetId: string;
	HitNumber: number;
	Type: number;
	IsOnlyFile: boolean;
	Name: string;
	Comments: string;
	OSSAccessKeyId: string;
	VocabId: number;
	VocabName: string;
	CreateTime: string;
	ShowNewbieTask: boolean;
	AudioName: string;
	FileMergeName: string;
	AudioScheme: string;
	Index: number;
	Key: string;
	AsrWordsCount: number;
	SkillGroupName: string;
	ScoreSubId: number;
	ScoreSubName: string;
	Duration: number;
	InstanceId: string;
	BusinessType: number;
	PostUrl: string;
	Policy: string;
	TotalScore: number;
	JudgeType: number;
	TaskType: number;
	Audio: boolean;
	Status: number;
	UpdateTime: string;
	Poc: boolean;
	PreVid: string;
	ProductType: string;
	Source: number;
	Select: boolean;
	RoleConfigStatus: number;
	AudioUrl: string;
	Signature: string;
	AudioURL: string;
	ScoreId: number;
	DataSetName: string;
	Deleted: boolean;
	DataSetId: number;
	HiddenMenuItems: HiddenMenuItems;
	ManualScoreMappingList: ManualScoreMappingListInGetNextResultToReview;
	RuleInfo: RuleInfo;
	HitRuleReviewInfoList: HitRuleReviewInfoListInTestRule;
	RuleList: RuleListInGetSkillGroupConfig;
	ManualScoreInfoList: ManualScoreInfoList;
	DiffAsrContentInfo: DiffAsrContentInfoInGetAudioContentInfo;
	Dialogues: DialoguesInGetNextResultToReview;
	Rules: RulesInGetRule;
	ReviewHistoryList: ReviewHistoryList;
	RecognizeDialogue: RecognizeDialogue;
	Precisions: PrecisionsInGetPrecisionTask;
	Words: Words;
	HandScoreInfoList: HandScoreInfoListInGetNextResultToReview;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetPrecisionTaskResponse
export interface GetPrecisionTaskResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: Data;
}

