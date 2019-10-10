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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.KeyValuePair
export interface KeyValuePair {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Progress
export interface Progress {
	StartTime: number;
	TotalJobs: number;
	Duration: number;
	Status: string;
	TotalCompleted: number;
	TotalNotAnswered: number;
	Categories: KeyValuePair[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.JobGroup
export interface JobGroup {
	Name: string;
	JobGroupId: string;
	JobGroupName: string;
	CreationTime: number;
	ScenarioId: string;
	SkillGroupName: string;
	OccupancyRate: string;
	SkillGroupId: string;
	StartTime: string;
	EndTime: string;
	InstanceId: string;
	JobGroupDescription: string;
	JobFilePath: string;
	Id: string;
	TaskType: string;
	Description: string;
	CallingNumbers: string[];
	Strategy: Strategy;
	Progress: Progress;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetJobGroupResponse
export interface GetJobGroupResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	JobGroup: JobGroup;
}

