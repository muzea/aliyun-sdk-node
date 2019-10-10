// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.SoftwareListItem
export interface SoftwareListItem {
	SoftwareId: string;
	SoftwareName: string;
	SoftwareVersion: string;
	SoftwareStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.SoftwareList
export interface SoftwareList {
	SoftwareListItem: SoftwareListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListInstalledSoftwareResponse
export interface ListInstalledSoftwareResponse {
	SoftwareList: SoftwareList;
}

