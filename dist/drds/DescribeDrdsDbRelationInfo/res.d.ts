// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyInstanceInfo
export interface ReadOnlyInstanceInfo {
	ReadOnlyInstanceIds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyInstanceIds
export interface ReadOnlyInstanceIds {
	ReadOnlyInstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataItem
export interface DataItem {
	UsedInstanceType: string;
	RdsInstanceId: string;
	Enabled: string;
	CreateTime: string;
	Detailed: string;
	OriginalTableName: string;
	TableName: string;
	DbName: string;
	UsedInstanceId: string;
	ReadOnlyInstanceInfo: ReadOnlyInstanceInfo;
	ReadOnlyInstanceIds: ReadOnlyInstanceIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeDrdsDbRelationInfo
export interface DataInDescribeDrdsDbRelationInfo {
	DataItem: DataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDbRelationInfoResponse
export interface DescribeDrdsDbRelationInfoResponse {
	RequestId: string;
	Success: boolean;
	Data: DataInDescribeDrdsDbRelationInfo;
}

