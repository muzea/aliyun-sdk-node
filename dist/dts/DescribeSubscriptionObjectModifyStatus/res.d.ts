// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionObjectModifyStatusCheckItem1
export interface DescribeSubscriptionObjectModifyStatusCheckItem1 {
	ItemName: string;
	CheckStatus: string;
	ErrorMessage: string;
	RepairMethod: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionObjectModifyStatusDetail0
export interface DescribeSubscriptionObjectModifyStatusDetail0 {
	CheckItem: DescribeSubscriptionObjectModifyStatusCheckItem1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionObjectModifyStatusResponse
export interface DescribeSubscriptionObjectModifyStatusResponse {
	RequestId: string;
	Status: string;
	Percent: string;
	Detail: DescribeSubscriptionObjectModifyStatusDetail0;
}

