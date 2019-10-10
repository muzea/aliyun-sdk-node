// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.ProtectionLevel
export interface ProtectionLevel {
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.ProtectionLevels
export interface ProtectionLevels {
	ProtectionLevel: ProtectionLevel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.DescribeServiceResponse
export interface DescribeServiceResponse {
	RequestId: string;
	ProtectionLevels: ProtectionLevels;
}

