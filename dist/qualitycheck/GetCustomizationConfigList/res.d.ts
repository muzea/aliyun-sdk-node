// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ModelCustomizationDataSetPo
export interface ModelCustomizationDataSetPo {
	ModelId: number;
	ModeCustomizationId: string;
	ModelName: string;
	ModelStatus: number;
	TaskType: number;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetCustomizationConfigList
export interface DataInGetCustomizationConfigList {
	ModelCustomizationDataSetPo: ModelCustomizationDataSetPo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetCustomizationConfigListResponse
export interface GetCustomizationConfigListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetCustomizationConfigList;
}

