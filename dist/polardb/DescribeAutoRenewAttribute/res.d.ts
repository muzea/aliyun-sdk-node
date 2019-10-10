// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.AutoRenewAttribute
export interface AutoRenewAttribute {
	DBClusterId: string;
	RegionId: string;
	AutoRenewEnabled: boolean;
	Duration: number;
	PeriodUnit: string;
	RenewalStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.ItemsInDescribeAutoRenewAttribute
export interface ItemsInDescribeAutoRenewAttribute {
	AutoRenewAttribute: AutoRenewAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeAutoRenewAttributeResponse
export interface DescribeAutoRenewAttributeResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeAutoRenewAttribute;
}

