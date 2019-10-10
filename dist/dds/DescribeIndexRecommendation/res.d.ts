// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.IndexCombines
export interface IndexCombines {
	IndexCombine: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Recommendation
export interface Recommendation {
	RecmdType: string;
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.IndexRecommendations
export interface IndexRecommendations {
	Recommendation: Recommendation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Analyzation
export interface Analyzation {
	Database: string;
	Namespace: string;
	Operation: string;
	Query: string;
	Sort: string;
	Count: number;
	TotalExecutionTime: number;
	AverageExecutionTime: number;
	AverageReturnRowCount: number;
	AverageDocsExaminedCount: number;
	AverageKeysExaminedCount: number;
	InMemorySort: string;
	LastExecutionTime: string;
	ExecutionPlan: string;
	IndexCombines: IndexCombines;
	IndexRecommendations: IndexRecommendations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Analyzations
export interface Analyzations {
	Analyzation: Analyzation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeIndexRecommendationResponse
export interface DescribeIndexRecommendationResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Analyzations: Analyzations;
}

