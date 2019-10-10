// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HeaderList
export interface HeaderList {
	Header: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RowItemList
export interface RowItemList {
	rowItem: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Row
export interface Row {
	RowIndex: number;
	RowItemList: RowItemList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RowList
export interface RowList {
	Row: Row[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowNodeSqlResultResponse
export interface ListFlowNodeSqlResultResponse {
	RequestId: string;
	End: boolean;
	HeaderList: HeaderList;
	RowList: RowList;
}

