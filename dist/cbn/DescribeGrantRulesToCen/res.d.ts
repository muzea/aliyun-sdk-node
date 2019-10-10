// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.GrantRule
export interface GrantRule {
	CenId: string;
	ChildInstanceRegionId: string;
	ChildInstanceType: string;
	ChildInstanceId: string;
	ChildInstanceOwnerId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.GrantRules
export interface GrantRules {
	GrantRule: GrantRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeGrantRulesToCenResponse
export interface DescribeGrantRulesToCenResponse {
	RequestId: string;
	GrantRules: GrantRules;
}

