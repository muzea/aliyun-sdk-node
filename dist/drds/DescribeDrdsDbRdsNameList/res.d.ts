// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.InstanceNameList
export interface InstanceNameList {
	InstanceName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDbRdsNameListResponse
export interface DescribeDrdsDbRdsNameListResponse {
	RequestId: string;
	Success: boolean;
	InstanceNameList: InstanceNameList;
}

