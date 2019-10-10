// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ApplicationInfo
export interface ApplicationInfo {
	AppId: string;
	Port: number;
	RegionId: string;
	ChangeOrderId: string;
	UserId: string;
	Owner: string;
	ClusterType: number;
	AppName: string;
	RegionName: string;
	Dockerize: boolean;
	EdasId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InsertK8SApplicationResponse
export interface InsertK8SApplicationResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ApplicationInfo: ApplicationInfo;
}

