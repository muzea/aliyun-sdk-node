// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.SenderAddressNotificationInfo
export interface SenderAddressNotificationInfo {
	Region: string;
	UpdateTime: string;
	Status: string;
	SenderAddressId: string;
	SenderAddress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInGetSenderAddressList
export interface DataInGetSenderAddressList {
	senderAddressNotificationInfo: SenderAddressNotificationInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.GetSenderAddressListResponse
export interface GetSenderAddressListResponse {
	RequestId: string;
	Total: number;
	PageNo: number;
	PageSize: number;
	data: DataInGetSenderAddressList;
}

