// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingActivity
export interface ScalingActivity {
	ScalingActivityId: string;
	ScalingGroupId: string;
	Description: string;
	Cause: string;
	StartTime: string;
	EndTime: string;
	Progress: number;
	StatusCode: string;
	StatusMessage: string;
	TotalCapacity: string;
	AttachedCapacity: string;
	AutoCreatedCapacity: string;
	ScalingInstanceNumber: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingActivities
export interface ScalingActivities {
	ScalingActivity: ScalingActivity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeScalingActivitiesResponse
export interface DescribeScalingActivitiesResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	ScalingActivities: ScalingActivities;
}

