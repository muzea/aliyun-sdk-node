// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.HitRuleSetInGetFileDimension
export interface HitRuleSetInGetFileDimension {
	HitRuleSet: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.TaskResultReviewInfo
export interface TaskResultReviewInfo {
	RealViolationNumber: number;
	Status: number;
	HandTaskFile: boolean;
	Vid: string;
	PreVid: string;
	FileMergeName: string;
	NextVid: string;
	HitRule: boolean;
	TaskId: string;
	CheckNumber: number;
	DataType: number;
	IsHitRule: boolean;
	BucketName: string;
	FileName: string;
	HitNumber: number;
	ReviewAccuracyRate: number;
	TotalScore: number;
	HitRuleSet: HitRuleSetInGetFileDimension;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetResultReviewList
export interface DataInGetResultReviewList {
	TaskResultReviewInfo: TaskResultReviewInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetResultReviewListResponse
export interface GetResultReviewListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	PageSize: number;
	DataSize: number;
	TotalCount: number;
	Data: DataInGetResultReviewList;
}

