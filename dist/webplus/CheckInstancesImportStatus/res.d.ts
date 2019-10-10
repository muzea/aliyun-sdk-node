// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceImportStatus
export interface InstanceImportStatus {
	InstanceId: string;
	ImportStatus: string;
	ImportMessage: string;
	FinishedTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstancesImportStatus
export interface InstancesImportStatus {
	InstanceImportStatus: InstanceImportStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.CheckInstancesImportStatusResponse
export interface CheckInstancesImportStatusResponse {
	RequestId: string;
	Code: string;
	Message: string;
	InstancesImportStatus: InstancesImportStatus;
}

