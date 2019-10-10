// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.PublishInfoDo
export interface PublishInfoDo {
	Topic: string;
	Owner: string;
	Relation: number;
	RelationName: string;
	CreateTime: number;
	Remark: string;
	MessageType: number;
	InstanceId: string;
	IndependentNaming: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsTopicList
export interface DataInOnsTopicList {
	PublishInfoDo: PublishInfoDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsTopicListResponse
export interface OnsTopicListResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsTopicList;
}

