// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ProductTopicInfo
export interface ProductTopicInfo {
	ProductKey: string;
	TopicShortName: string;
	Operation: string;
	Desc: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryProductTopic
export interface DataInQueryProductTopic {
	ProductTopicInfo: ProductTopicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryProductTopicResponse
export interface QueryProductTopicResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryProductTopic;
}

