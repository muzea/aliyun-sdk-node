// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.RoleInfo
export interface RoleInfo {
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.RolesInGetClusterVolumes
export interface RolesInGetClusterVolumes {
	RoleInfo: RoleInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.AdditionalVolumes
export interface AdditionalVolumes {
	VolumeInfo: VolumeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.VolumeInfo
export interface VolumeInfo {
	ClusterId: string;
	VolumeId: string;
	VolumeProtocol: string;
	VolumeType: string;
	RemoteDirectory: string;
	Location: string;
	LocalDirectory: string;
	VolumeMountpoint: string;
	RegionId: string;
	Role: string;
	JobQueue: string;
	ClusterName: string;
	MustKeep: boolean;
	Roles: RolesInGetClusterVolumes;
	AdditionalVolumes: AdditionalVolumes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.VolumesInListVolumes
export interface VolumesInListVolumes {
	VolumeInfo: VolumeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListVolumesResponse
export interface ListVolumesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Volumes: VolumesInListVolumes;
}

