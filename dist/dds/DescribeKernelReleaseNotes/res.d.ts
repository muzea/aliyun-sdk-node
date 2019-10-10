// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReleaseNote
export interface ReleaseNote {
	KernelVersion: string;
	ReleaseNote: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReleaseNotes
export interface ReleaseNotes {
	ReleaseNote: ReleaseNote[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeKernelReleaseNotesResponse
export interface DescribeKernelReleaseNotesResponse {
	RequestId: string;
	ReleaseNotes: ReleaseNotes;
}

