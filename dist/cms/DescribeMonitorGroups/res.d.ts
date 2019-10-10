// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Vpc
export interface Vpc {
	VpcInstanceId: string;
	VswitchInstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Region
export interface Region {
	RegionId: string;
	AvailabilityZone: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Tags
export interface Tags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Warn
export interface Warn {
	ComparisonOperator: string;
	Times: string;
	Statistics: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Info
export interface Info {
	ComparisonOperator: string;
	Times: string;
	Statistics: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Critical
export interface Critical {
	ComparisonOperator: string;
	Times: string;
	Statistics: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Escalations
export interface Escalations {
	Warn: Warn;
	Info: Info;
	Critical: Critical;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AlertTemplate
export interface AlertTemplate {
	RuleName: string;
	Category: string;
	Namespace: string;
	MetricName: string;
	Selector: string;
	Escalations: Escalations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AlertTemplates
export interface AlertTemplates {
	AlertTemplate: AlertTemplate[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactGroup
export interface ContactGroup {
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactGroupsInDescribeMonitorGroups
export interface ContactGroupsInDescribeMonitorGroups {
	ContactGroup: ContactGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Result
export interface Result {
	Message: string;
	RuleName: string;
	Code: string;
	Success: boolean;
	GroupId: number;
	RuleId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Resource
export interface Resource {
	TemplateId: string;
	Name: string;
	Category: string;
	Unit: string;
	NameDesc: string;
	Desc: string;
	BindUrl: string;
	Dimensions: string;
	GroupName: string;
	ServiceId: string;
	RestVersion: string;
	RegionId: string;
	InstanceId: string;
	NetworkType: string;
	Description: string;
	Periods: string;
	Type: string;
	Product: string;
	InstanceName: string;
	Level: string;
	Dimension: string;
	Id: number;
	GmtCreate: number;
	EventType: string;
	Namespace: string;
	GroupId: number;
	GmtModified: number;
	MetricName: string;
	StatusDesc: string;
	Labels: string;
	Status: string;
	Statistics: string;
	Vpc: Vpc;
	Region: Region;
	Tags: Tags;
	AlertTemplates: AlertTemplates;
	ContactGroups: ContactGroupsInDescribeMonitorGroups;
	AlertResults: Result[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResourcesInDescribeMonitorGroups
export interface ResourcesInDescribeMonitorGroups {
	Resource: Resource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitorGroupsResponse
export interface DescribeMonitorGroupsResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	Resources: ResourcesInDescribeMonitorGroups;
}

