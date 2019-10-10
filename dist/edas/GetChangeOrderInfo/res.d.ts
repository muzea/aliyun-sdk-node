// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ServiceStage
export interface ServiceStage {
	StageId: string;
	StageName: string;
	Status: number;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InstanceStageDTO
export interface InstanceStageDTO {
	StageId: string;
	StageName: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InstanceStageDTOList
export interface InstanceStageDTOList {
	InstanceStageDTO: InstanceStageDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InstanceDTO
export interface InstanceDTO {
	InstanceName: string;
	InstanceIp: string;
	Status: number;
	InstanceStageDTOList: InstanceStageDTOList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InstanceDTOList
export interface InstanceDTOList {
	InstanceDTO: InstanceDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.StageResultDTO
export interface StageResultDTO {
	ServiceStage: ServiceStage;
	InstanceDTOList: InstanceDTOList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.StageInfoDTO
export interface StageInfoDTO {
	StageId: string;
	StageName: string;
	Status: number;
	StageResultDTO: StageResultDTO;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.StageList
export interface StageList {
	StageInfoDTO: StageInfoDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.PipelineInfo
export interface PipelineInfo {
	PipelineId: string;
	PipelineName: string;
	PipelineStatus: number;
	StageList: StageList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.PipelineInfoList
export interface PipelineInfoList {
	PipelineInfo: PipelineInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ChangeOrderInfo
export interface ChangeOrderInfo {
	ChangeOrderId: string;
	CreateUserId: string;
	Desc: string;
	BatchCount: number;
	BatchType: string;
	Status: number;
	CoType: string;
	CreateTime: string;
	PipelineInfoList: PipelineInfoList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GetChangeOrderInfoResponse
export interface GetChangeOrderInfoResponse {
	Code: number;
	Message: string;
	RequestId: string;
	changeOrderInfo: ChangeOrderInfo;
}

