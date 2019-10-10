// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.BuildPack
export interface BuildPack {
	ConfigId: number;
	PackVersion: string;
	TomcatDesc: string;
	TomcatVersion: string;
	TomcatDownloadUrl: string;
	PandoraVersion: string;
	PandoraDownloadUrl: string;
	PandoraDesc: string;
	PluginInfo: string;
	TomcatPath: string;
	ImageId: string;
	TengineImageId: string;
	MultipleTenant: boolean;
	WithTengine: boolean;
	TengineDownloadUrl: string;
	ScriptName: string;
	ScriptVersion: string;
	Feature: string;
	SupportFeatures: string;
	Disabled: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.BuildPackList
export interface BuildPackList {
	BuildPack: BuildPack[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListBuildPackResponse
export interface ListBuildPackResponse {
	Code: number;
	Message: string;
	RequestId: string;
	BuildPackList: BuildPackList;
}

