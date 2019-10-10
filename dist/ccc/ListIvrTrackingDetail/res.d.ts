// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.IvrTrackingDetail
export interface IvrTrackingDetail {
	FlowName: string;
	NodeName: string;
	NodeType: string;
	ContactId: string;
	CallingNumber: string;
	CalledNumber: string;
	StartTime: number;
	StopTime: number;
	Status: string;
	InputData: string;
	OutputData: string;
	Description: string;
	DeviceID: string;
	TenantId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListIvrTrackingDetail
export interface ListInListIvrTrackingDetail {
	IvrTrackingDetail: IvrTrackingDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.IvrTrackingDetails
export interface IvrTrackingDetails {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListIvrTrackingDetail;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListIvrTrackingDetailResponse
export interface ListIvrTrackingDetailResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	IvrTrackingDetails: IvrTrackingDetails;
}

