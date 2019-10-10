// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ExtendInfo
export interface ExtendInfo {
	AliUid: number;
	Email: string;
	Mobile: string;
	AccountQuantity: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.LicenseAttribute
export interface LicenseAttribute {
	Code: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ExtendArray
export interface ExtendArray {
	LicenseAttribute: LicenseAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.License
export interface License {
	LicenseStatus: string;
	LicenseCode: string;
	InstanceId: string;
	CreateTime: string;
	ExpiredTime: string;
	ActivateTime: string;
	ProductSkuId: string;
	ProductCode: string;
	ProductName: string;
	SupplierName: string;
	ExtendInfo: ExtendInfo;
	ExtendArray: ExtendArray;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeLicenseResponse
export interface DescribeLicenseResponse {
	RequestId: string;
	License: License;
}

