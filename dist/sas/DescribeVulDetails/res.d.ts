// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.Classify
export interface Classify {
	Classify: string;
	Description: string;
	DemoVideoUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.Cve
export interface Cve {
	CveId: string;
	CnvdId: string;
	Title: string;
	CvssScore: string;
	CvssVector: string;
	ReleaseTime: number;
	Complexity: string;
	Poc: string;
	PocCreateTime: number;
	PocDisclosureTime: number;
	Summary: string;
	Solution: string;
	Content: string;
	Vendor: string;
	Product: string;
	VulLevel: string;
	Reference: string;
	Classify: string;
	Classifys: Classify[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeVulDetailsResponse
export interface DescribeVulDetailsResponse {
	RequestId: string;
	Cves: Cve[];
}

