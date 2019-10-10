// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataSet
export interface DataSet {
	SetId: number;
	SetName: string;
	SetDomain: string;
	SetRoleArn: string;
	SetBucketName: string;
	SetFolderName: string;
	ChannelType: number;
	CreateType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetDataSetList
export interface DataInGetDataSetList {
	DataSet: DataSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetDataSetListResponse
export interface GetDataSetListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Count: number;
	Data: DataInGetDataSetList;
}

