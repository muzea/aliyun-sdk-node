// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RestoreTime
export interface RestoreTime {
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeBackupTimesResponse
export interface DescribeBackupTimesResponse {
	RequestId: string;
	Success: boolean;
	RestoreTime: RestoreTime;
}

