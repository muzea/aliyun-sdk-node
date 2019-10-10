// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.NoteInfo
export interface NoteInfo {
	Id: string;
	Name: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Notes
export interface Notes {
	NoteInfo: NoteInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListNotesResponse
export interface ListNotesResponse {
	RequestId: string;
	Notes: Notes;
}

