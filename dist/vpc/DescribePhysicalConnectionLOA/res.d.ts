// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PMInfoItem
export interface PMInfoItem {
	PMName: string;
	PMContactInfo: string;
	PMCertificateType: string;
	PMCertificateNo: string;
	PMGender: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PMInfo
export interface PMInfo {
	PMInfoItem: PMInfoItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PhysicalConnectionLOAType
export interface PhysicalConnectionLOAType {
	InstanceId: string;
	CompanyName: string;
	CompanyLocalizedName: string;
	LineType: string;
	LineCode: string;
	LineLabel: string;
	ConstructionTime: string;
	Status: string;
	LoaUrl: string;
	SI: string;
	PMInfo: PMInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribePhysicalConnectionLOAResponse
export interface DescribePhysicalConnectionLOAResponse {
	RequestId: string;
	PhysicalConnectionLOAType: PhysicalConnectionLOAType;
}

