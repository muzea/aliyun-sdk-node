// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.QualityCheckPhrase
export interface QualityCheckPhrase {
	Identity: string;
	Role: string;
	Words: string;
	Begin: number;
	End: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInGetConversationDetailByContactId
export interface ListInGetConversationDetailByContactId {
	QualityCheckPhrase: QualityCheckPhrase[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DataList
export interface DataList {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInGetConversationDetailByContactId;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetConversationDetailByContactIdResponse
export interface GetConversationDetailByContactIdResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	DataList: DataList;
}

