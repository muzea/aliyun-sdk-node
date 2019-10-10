// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SnapshotsInGetEditingProjectMaterials
export interface SnapshotsInGetEditingProjectMaterials {
	Snapshot: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Sprites
export interface Sprites {
	Sprite: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Material
export interface Material {
	MaterialId: string;
	Title: string;
	Tags: string;
	Status: string;
	Size: number;
	Duration: number;
	Description: string;
	CreationTime: string;
	ModifiedTime: string;
	CoverURL: string;
	CateId: number;
	CateName: string;
	Source: string;
	SpriteConfig: string;
	Snapshots: SnapshotsInGetEditingProjectMaterials;
	Sprites: Sprites;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MaterialList
export interface MaterialList {
	Material: Material[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetEditingProjectMaterialsResponse
export interface GetEditingProjectMaterialsResponse {
	RequestId: string;
	MaterialList: MaterialList;
}

