// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ColumnInfo
export interface ColumnInfo {
	ColumnName: string;
	ColumnType: string;
	Extra: string;
	Index: string;
	IsAllowNull: string;
	IsPk: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeTable
export interface DataInDescribeTable {
	List: ColumnInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeTableResponse
export interface DescribeTableResponse {
	RequestId: string;
	Success: boolean;
	Data: DataInDescribeTable;
}

