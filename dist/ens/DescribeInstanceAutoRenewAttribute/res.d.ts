// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceRenewAttribute
export interface InstanceRenewAttribute {
	InstanceId: string;
	AutoRenewal: boolean;
	Duration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InstanceRenewAttributes
export interface InstanceRenewAttributes {
	InstanceRenewAttribute: InstanceRenewAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeInstanceAutoRenewAttributeResponse
export interface DescribeInstanceAutoRenewAttributeResponse {
	RequestId: string;
	Code: number;
	InstanceRenewAttributes: InstanceRenewAttributes;
}

