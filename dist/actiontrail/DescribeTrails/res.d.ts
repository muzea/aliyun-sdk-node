// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/actiontrail.TrailListItem
export interface TrailListItem {
	Name: string;
	HomeRegion: string;
	RoleName: string;
	Status: string;
	IncludeGlobalServiceEvent: string;
	OssBucketName: string;
	OssKeyPrefix: string;
	Region: string;
	EventRW: string;
	Type: string;
	SlsWriteRoleArn: string;
	SlsProjectArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/actiontrail.DescribeTrailsResponse
export interface DescribeTrailsResponse {
	RequestId: string;
	TrailList: TrailListItem[];
}

