// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Element
export interface Element {
	ElementIndex: string;
	OwnerId: string;
	ElementType: number;
	UpdateTimestamp: number;
	Data: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Page
export interface Page {
	PageIndex: number;
	Elements: Element[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Config
export interface Config {
	AppUid: string;
	Data: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Board
export interface Board {
	BoardId: string;
	AppUid: string;
	EventTimestamp: number;
	CreateTimestamp: number;
	UpdateTimestamp: number;
	Pages: Page[];
	Configs: Config[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Snapshot
export interface Snapshot {
	Board: Board;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeBoardSnapshotResponse
export interface DescribeBoardSnapshotResponse {
	RequestId: string;
	Snapshot: Snapshot;
}

