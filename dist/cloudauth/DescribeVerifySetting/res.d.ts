// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.VerifySetting
export interface VerifySetting {
	BizType: string;
	BizName: string;
	Solution: string;
	StepList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DescribeVerifySettingResponse
export interface DescribeVerifySettingResponse {
	RequestId: string;
	VerifySettingList: VerifySetting[];
}

