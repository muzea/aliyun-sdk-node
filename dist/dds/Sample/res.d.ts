// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SecurityIpGroup
export interface SecurityIpGroup {
	SecurityIpGroupName: string;
	SecurityIpGroupAttribute: string;
	SecurityIpList: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SecurityIpGroupsInSample
export interface SecurityIpGroupsInSample {
	SecurityIpGroup: SecurityIpGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SampleResponse
export interface SampleResponse {
	RequestId: string;
	SecurityIps: string;
	SecurityIpGroups: SecurityIpGroupsInSample;
}

