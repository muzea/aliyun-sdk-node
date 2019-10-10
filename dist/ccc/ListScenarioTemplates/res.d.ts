// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.TimeFrame
export interface TimeFrame {
	EndTime: string;
	To: string;
	BeginTime: string;
	From: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Strategy
export interface Strategy {
	StrategyName: string;
	Name: string;
	Customized: string;
	MinAttemptInterval: number;
	StrategyDescription: string;
	FollowUpStrategy: string;
	StrategyId: string;
	MaxAttemptsPerDay: number;
	EndTime: number;
	StartTime: number;
	RepeatBy: string;
	RoutingStrategy: string;
	IsTemplate: boolean;
	Id: string;
	Description: string;
	Type: string;
	RepeatDays: string[];
	WorkingTime: TimeFrame[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Flow
export interface Flow {
	IsPublished: boolean;
	FlowId: string;
	FlowJson: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AsrCustomModel
export interface AsrCustomModel {
	Corpora: string;
	CustomModelStatus: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.IntentNode
export interface IntentNode {
	NodeId: string;
	IntentId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Survey
export interface Survey {
	Name: string;
	SurveyName: string;
	BeebotId: string;
	SpeechOptimizationParam: string;
	SurveyId: string;
	HotWords: string;
	Round: number;
	ScenarioUuid: string;
	SurveyDescription: string;
	GlobalQuestions: string;
	Role: string;
	Id: string;
	Description: string;
	Flow: Flow;
	AsrCustomModel: AsrCustomModel;
	Intents: IntentNode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.KeyValuePair
export interface KeyValuePair {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Scenario
export interface Scenario {
	Name: string;
	ScenarioId: string;
	ScenarioDescription: string;
	IsTemplate: boolean;
	Id: string;
	Description: string;
	ScenarioName: string;
	Type: string;
	Strategy: Strategy;
	Surveys: Survey[];
	Variables: KeyValuePair[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListScenarioTemplatesResponse
export interface ListScenarioTemplatesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	ScenarioTemplates: Scenario[];
}

