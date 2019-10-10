// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Package
export interface Package {
	ModifyTime: number;
	OriginName: string;
	OssOwner: string;
	PackageName: string;
	CreateTime: number;
	OssBucket: string;
	OssPath: string;
	Tag: string;
	ProjectName: string;
	Modifier: string;
	Md5: string;
	Creator: string;
	OssEndpoint: string;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Packages
export interface Packages {
	Package: Package[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListPackageResponse
export interface ListPackageResponse {
	RequestId: string;
	PageIndex: number;
	PageSize: number;
	TotalPage: number;
	TotalCount: number;
	Packages: Packages;
}

