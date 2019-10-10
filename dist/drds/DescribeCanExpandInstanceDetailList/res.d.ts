// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbList
export interface DbList {
	db: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ItemData
export interface ItemData {
	SrcInstance: string;
	DbList: DbList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeCanExpandInstanceDetailList
export interface DataInDescribeCanExpandInstanceDetailList {
	itemData: ItemData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeCanExpandInstanceDetailListResponse
export interface DescribeCanExpandInstanceDetailListResponse {
	RequestId: string;
	Success: boolean;
	Data: DataInDescribeCanExpandInstanceDetailList;
}

