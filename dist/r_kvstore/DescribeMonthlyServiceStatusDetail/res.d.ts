// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AffectedInfo
export interface AffectedInfo {
	StartTime: string;
	EndTime: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AffectedInfos
export interface AffectedInfos {
	AffectedInfo: AffectedInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeMonthlyServiceStatusDetailResponse
export interface DescribeMonthlyServiceStatusDetailResponse {
	RequestId: string;
	InstanceId: string;
	UptimePct: number;
	AffectedInfos: AffectedInfos;
}

