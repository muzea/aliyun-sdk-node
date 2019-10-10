// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Db
export interface Db {
	DbName: string;
	Status: number;
	CreateTime: string;
	Msg: string;
	Mode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeDrdsDBs
export interface DataInDescribeDrdsDBs {
	Db: Db[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDBsResponse
export interface DescribeDrdsDBsResponse {
	RequestId: string;
	Success: boolean;
	Data: DataInDescribeDrdsDBs;
}

