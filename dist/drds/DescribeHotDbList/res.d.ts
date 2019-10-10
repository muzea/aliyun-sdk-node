// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.HotDbList
export interface HotDbList {
	data: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.InstanceDb
export interface InstanceDb {
	InstanceName: string;
	HotDbList: HotDbList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ListInDescribeHotDbList
export interface ListInDescribeHotDbList {
	InstanceDb: InstanceDb[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeHotDbList
export interface DataInDescribeHotDbList {
	RandomCode: string;
	List: ListInDescribeHotDbList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeHotDbListResponse
export interface DescribeHotDbListResponse {
	RequestId: string;
	Success: boolean;
	Msg: string;
	Data: DataInDescribeHotDbList;
}

