// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ModifySurveyResponse
export interface ModifySurveyResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Survey: Survey;
}

