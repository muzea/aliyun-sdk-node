// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SmartAGVersion
export interface SmartAGVersion {
	VersionCode: string;
	VersionName: string;
	CreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SmartAGVersions
export interface SmartAGVersions {
	SmartAGVersion: SmartAGVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeSmartAccessGatewayVersionsResponse
export interface DescribeSmartAccessGatewayVersionsResponse {
	RequestId: string;
	SmartAGVersions: SmartAGVersions;
}

