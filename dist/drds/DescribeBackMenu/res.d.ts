// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.List
export interface List {
	Support: boolean;
	MenuName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ListInDescribeBackMenu
export interface ListInDescribeBackMenu {
	list: List[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeBackMenuResponse
export interface DescribeBackMenuResponse {
	RequestId: string;
	Success: boolean;
	List: ListInDescribeBackMenu;
}

