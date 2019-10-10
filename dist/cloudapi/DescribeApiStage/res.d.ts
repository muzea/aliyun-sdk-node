// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RouteRuleItem
export interface RouteRuleItem {
	MaxValue: number;
	MinValue: number;
	ConditionValue: string;
	ResultValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RouteRules
export interface RouteRules {
	RouteRuleItem: RouteRuleItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.StageRouteModel
export interface StageRouteModel {
	ParameterCatalog: string;
	ServiceParameterName: string;
	Location: string;
	ParameterType: string;
	RouteMatchSymbol: string;
	RouteRules: RouteRules;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.VariableItem
export interface VariableItem {
	VariableName: string;
	VariableValue: string;
	SupportRoute: boolean;
	StageRouteModel: StageRouteModel;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Variables
export interface Variables {
	VariableItem: VariableItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiStageResponse
export interface DescribeApiStageResponse {
	RequestId: string;
	GroupId: string;
	StageId: string;
	StageName: string;
	Description: string;
	CreatedTime: string;
	ModifiedTime: string;
	Variables: Variables;
}

