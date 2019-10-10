// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Snapshot
export interface Snapshot {
	Index: number;
	Url: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SnapshotsInListSnapshots
export interface SnapshotsInListSnapshots {
	Snapshot: Snapshot[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MediaSnapshot
export interface MediaSnapshot {
	Total: number;
	Regular: string;
	CreationTime: string;
	JobId: string;
	Snapshots: SnapshotsInListSnapshots;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListSnapshotsResponse
export interface ListSnapshotsResponse {
	RequestId: string;
	MediaSnapshot: MediaSnapshot;
}

